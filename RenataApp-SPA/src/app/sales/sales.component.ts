import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { SaleType } from '../_models/saleType';
import { PayType } from '../_models/payType';
import { PhoneType } from '../_models/phoneType';
import { PhoneModel } from '../_models/phoneModel';
import { UserService } from '../_services/user.service';
import { AlertifyService } from '../_services/alertify.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BsDatepickerConfig } from 'ngx-bootstrap';
import { Sale } from '../_models/sale';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {
saletypes: SaleType[];
paytypes: PayType[];
phonetypes: PhoneType[];
phonemodels: PhoneModel[];
sales: Sale[];
model: any = {};
bsConfig: Partial<BsDatepickerConfig>;

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
      this.paytypes = data.paytypes;
      this.phonetypes = data.phonetypes;
      this.phonemodels = data.phonemodels;
      this.sales = data.sales;
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
