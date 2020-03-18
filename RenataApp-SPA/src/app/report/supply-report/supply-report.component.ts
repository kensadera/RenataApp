import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/_services/user.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { ActivatedRoute } from '@angular/router';
import { Supplier } from 'src/app/_models/supplier';
import { Phone } from 'src/app/_models/phone';
import { Pagination, PaginatedResult } from 'src/app/_models/pagination';

@Component({
  selector: 'app-supply-report',
  templateUrl: './supply-report.component.html',
  styleUrls: ['./supply-report.component.css']
})
export class SupplyReportComponent implements OnInit {
phones: Phone[];
phone: Phone = JSON.parse(localStorage.getItem('phone'));
phoneParams: any = {};
pagination: Pagination;



  constructor(private userService: UserService,
              private alertify: AlertifyService,
              private route: ActivatedRoute) { }
  ngOnInit() {

    this.route.data.subscribe(data => {
      this.phones = data.phones.result;
      this.pagination = data.phones.pagination;
    });

    this.phoneParams.supplierName = this.phone.supplierName === 'supplierName?' ;
    this.phoneParams.orderBy = this.phone.date;
  }

  pageChanged(event: any): void {
    this.pagination.currentPage = event.page;
    this.loadPhones();
  }

  resetFilters() {
  //  this.phoneParams.supplierName = this.phone.supplierName === 'supplierName?';
    this.loadPhones();
  }


  loadPhones() {
    this.userService.getPhones(this.pagination.currentPage, this.pagination.itemsPerPage, this.phoneParams)
    .subscribe(
      (res: PaginatedResult<Phone[]>) => {
      this.phones = res.result;
      this.pagination = res.pagination;
    },
    error => {
      this.alertify.error(error);
    });
  }

}
