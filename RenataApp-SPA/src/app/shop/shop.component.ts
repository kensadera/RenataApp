import { Component, OnInit } from '@angular/core';
import { Store } from '../_models/store';
import { PhoneType } from '../_models/phoneType';
import { UserService } from '../_services/user.service';
import { AlertifyService } from '../_services/alertify.service';
import { PhoneModel } from '../_models/phoneModel';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
stores: Store[];
phonetypes: PhoneType[];
phonemodels: PhoneModel[];
model: any = {};

  constructor(private userService: UserService, private alertify: AlertifyService) { }

  ngOnInit() {
    this.loadStores();
    this.loadPhoneTypes();
    this.loadPhoneModels();
  }

  loadStores() {
    this.userService.getStores().subscribe((stores: Store[]) => {
      this.stores = stores;
    }, error => {
      this.alertify.error(error);
    });
  }

  loadPhoneTypes() {
    // tslint:disable-next-line: no-string-literal
    this.userService.getPhoneBrands().subscribe((phonetypes: PhoneType[]) => {
      this.phonetypes = phonetypes;
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
