import { Component, OnInit, Input, ViewChild, HostListener } from '@angular/core';
import { UserService } from 'src/app/_services/user.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { AuthService } from 'src/app/_services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { PhoneType } from 'src/app/_models/phoneType';

@Component({
  selector: 'app-app-detail',
  templateUrl: './app-details.component.html',
  styleUrls: ['./app-details.component.css']
})
export class AppDetailsComponent implements OnInit {
phonetypes: PhoneType[];
model: any = {};

@ViewChild('supplierForm', { static: true}) supplierForm: NgForm;
@ViewChild('brandForm', { static: true}) brandForm: NgForm;
@ViewChild('modelForm', { static: true}) modelForm: NgForm;
@ViewChild('saleForm', { static: true}) saleForm: NgForm;
@ViewChild('payForm', { static: true}) payForm: NgForm;
@ViewChild('storeForm', { static: true}) storeForm: NgForm;
@HostListener('window:beforeunload', ['$event'])
unloadNotification($event: any) {
  if (this.supplierForm.dirty || this.brandForm.dirty || this.modelForm.dirty ||
    this.saleForm.dirty || this.payForm.dirty || this.storeForm.dirty) {
    $event.returnValue = true;
  }
}


  constructor(private userService: UserService,
              private alertify: AlertifyService,
              private authService: AuthService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.phonetypes = data.phonetypes;
    });
  }

  createSupplier(model) {
    this.userService.createSupplier(this.model).subscribe(next => {
      this.alertify.success('Supplier added successfully');
      this.supplierForm.reset();
    }, error => {
      this.alertify.error(error);
    });
  }


  createPhoneBrand(model) {
    this.userService.createPhoneBrand(this.model).subscribe(next => {
      this.alertify.success('Phone brand added successfully');
      this.brandForm.reset();
    }, error => {
      this.alertify.error(error);
    });
  }


  createPhoneModel(model) {
    this.userService.createPhoneModel(this.model).subscribe(next => {
      this.alertify.success('Phone model added successfully');
      this.modelForm.reset();
    }, error => {
      this.alertify.error(error);
    });
  }


  createSaleType(model) {
    this.userService.createSaleType(this.model).subscribe(next => {
      this.alertify.success('Sale type added successfully');
      this.saleForm.reset();
    }, error => {
      this.alertify.error(error);
    });
  }


  createStore(model) {
    this.userService.createStore(this.model).subscribe(next => {
      this.alertify.success('Storage location added successfully');
      this.storeForm.reset();
    }, error => {
      this.alertify.error(error);
    });
  }


  cancel() {
    this.supplierForm.reset(this.model);
    this.brandForm.reset(this.model);
    this.modelForm.reset(this.model);
    this.saleForm.reset(this.model);
    this.payForm.reset(this.model);
    this.storeForm.reset(this.model);
  }


}
