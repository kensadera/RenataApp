import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BsDatepickerConfig } from 'ngx-bootstrap';
import { SaleType } from 'src/app/_models/saleType';
import { PhoneType } from 'src/app/_models/phoneType';
import { PhoneModel } from 'src/app/_models/phoneModel';
import { Sale } from 'src/app/_models/sale';
import { UserService } from 'src/app/_services/user.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { Pagination, PaginatedResult } from 'src/app/_models/pagination';

@Component({
  selector: 'app-sales',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.css']
})
export class SaleComponent implements OnInit {
saletypes: SaleType[];
phonetypes: PhoneType[];
phonemodels: PhoneModel[];
sales: Sale[];
model: any = {};
bsConfig: Partial<BsDatepickerConfig>;
pagination: Pagination;

@ViewChild('saleForm', { static: true}) saleForm: NgForm;
@HostListener('window:beforeunload', ['$event'])
unloadNotification($event: any) {
  if (this.saleForm.dirty) {
    $event.returnValue = true;
  }
}

constructor(private userService: UserService,
            private route: ActivatedRoute,
            private alertify: AlertifyService) { }

  ngOnInit() {
    this.bsConfig = { containerClass: 'theme-red'},

    this.route.data.subscribe(data => {
      this.saletypes = data.saletypes;
      this.phonetypes = data.phonetypes;
      this.phonemodels = data.phonemodels;

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


  createSale(model) {
    this.userService.createSale(this.model).subscribe(next => {
      this.alertify.success('Sale details added successfully');
      this.saleForm.reset();
    }, error => {
      this.alertify.error(error);
    });
  }



  deleteSale(id: number) {
    this.alertify.confirm('Are you sure you want to delete the sales info?', () => {
      this.userService.deleteSale(id).subscribe(() => {
        this.sales.slice(this.sales.findIndex(p => p.id === id), 1);
        this.alertify.success('Sale detail removed successfully');
      }, error => {
        this.alertify.error('failed to delele the sale details');
      });
    });
  }



}
