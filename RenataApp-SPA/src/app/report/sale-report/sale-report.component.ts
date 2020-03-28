import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/_services/user.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { Sale } from 'src/app/_models/sale';
import { ActivatedRoute } from '@angular/router';
import { Pagination, PaginatedResult } from 'src/app/_models/pagination';

@Component({
  selector: 'app-sale-report',
  templateUrl: './sale-report.component.html',
  styleUrls: ['./sale-report.component.css']
})
export class SaleReportComponent implements OnInit {
  sales: Sale[];
  pagination: Pagination;


  constructor(private userService: UserService,
              private alertify: AlertifyService,
              private route: ActivatedRoute) { }
  ngOnInit() {


    this.route.data.subscribe(data => {

      this.sales = data.sales.result;
      this.pagination = data.sales.pagination;
    });
  }


  pageChanged(event: any): void {
    this.pagination.currentPage = event.page;
    this.loadSales();
  }

  loadSales() {
    this.userService.getSales(this.pagination.currentPage, this.pagination.itemsPerPage)
    .subscribe(
      (res: PaginatedResult<Sale[]>) => {
      this.sales = res.result;
      this.pagination = res.pagination;
    },
    error => {
      this.alertify.error(error);
    });
  }

}
