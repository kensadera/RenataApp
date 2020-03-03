import { Component, OnInit } from '@angular/core';
import { SaleType } from '../_models/saleType';
import { PayType } from '../_models/payType';
import { PhoneType } from '../_models/phoneType';
import { PhoneModel } from '../_models/phoneModel';
import { UserService } from '../_services/user.service';
import { AlertifyService } from '../_services/alertify.service';

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
model: any = {};

  constructor(private userService: UserService, private alertify: AlertifyService) { }

  ngOnInit() {
    this.loadSaleTypes();
    this.loadPayTypes();
    this.loadPhoneTypes();
    this.loadPhoneModels();
  }

  loadPhoneTypes() {
    // tslint:disable-next-line: no-string-literal
    this.userService.getPhoneBrands().subscribe((phonetypes: PhoneType[]) => {
      this.phonetypes = phonetypes;
    }, error => {
      this.alertify.error(error);
    });
  }

  loadSaleTypes() {
    this.userService.getSaleTypes().subscribe((saletypes: SaleType[]) => {
      this.saletypes = saletypes;
    }, error => {
      this.alertify.error(error);
    });
  }

  loadPayTypes() {
    this.userService.getPayTypes().subscribe((paytypes: PayType[]) => {
      this.paytypes = paytypes;
    }, error => {
      this.alertify.error(error);
    });
  }

  loadPhoneModels() {
    // tslint:disable-next-line: no-string-literal
    this.userService.getPhoneModels().subscribe((phonemodels: PhoneModel[]) => {
      this.phonemodels = phonemodels;
    }, error => {
      this.alertify.error(error);
    });
  }


}
