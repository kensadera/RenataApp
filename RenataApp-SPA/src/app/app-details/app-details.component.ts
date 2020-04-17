import { Component, OnInit, Input, ViewChild, HostListener } from '@angular/core';
import { UserService } from 'src/app/_services/user.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { AuthService } from 'src/app/_services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { PhoneType } from 'src/app/_models/phoneType';
import { Supplier } from '../_models/supplier';
import { PhoneModel } from '../_models/phoneModel';

@Component({
  selector: 'app-app-detail',
  templateUrl: './app-details.component.html',
  styleUrls: ['./app-details.component.css']
})
export class AppDetailsComponent implements OnInit {
phonetypes: PhoneType[];
suppliers: Supplier[];
phonemodels: PhoneModel[];
model: any = {};

@ViewChild('supplierForm', { static: true}) supplierForm: NgForm;
@ViewChild('brandForm', { static: true}) brandForm: NgForm;
@ViewChild('modelForm', { static: true}) modelForm: NgForm;
@ViewChild('editForm', { static: true}) editForm: NgForm;
@HostListener('window:beforeunload', ['$event'])
unloadNotification($event: any) {
  if (this.supplierForm.dirty || this.brandForm.dirty || this.modelForm.dirty) {
    $event.returnValue = true;
  }
}


  constructor(private userService: UserService,
              private alertify: AlertifyService,
              private authService: AuthService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.suppliers = data.suppliers;
      this.phonetypes = data.phonetypes;
      this.phonemodels = data.phonemodels;
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

  loadSuppliers() {
    this.userService.getSuppliers().subscribe((suppliers: Supplier[]) => {
      this.suppliers = suppliers;
    }, error => {
      this.alertify.error(error);
    });
  }


  deleteSupplier(id: number) {
    this.alertify.confirm('Are you sure you want to delete the supplier?', () => {
      this.userService.deleteSupplier(id).subscribe(() => {
        this.suppliers.slice(this.suppliers.findIndex(p => p.id === id), 1);
        this.alertify.success('Supplier removed successfully');
      }, error => {
        this.alertify.error('failed to delele the supply details');
      });
    });
  }

  deletePhoneBrand(id: number) {
    this.alertify.confirm('Are you sure you want to delete the phone brand?', () => {
      this.userService.deletePhoneBrand(id).subscribe(() => {
        this.phonetypes.slice(this.phonetypes.findIndex(p => p.id === id), 1);
        this.alertify.success('Brand removed successfully');
      }, error => {
        this.alertify.error('failed to delele the brand ');
      });
    });
  }


  deletePhoneModel(id: number) {
    this.alertify.confirm('Are you sure you want to delete the phone model?', () => {
      this.userService.deletePhoneModel(id).subscribe(() => {
        this.phonemodels.slice(this.phonemodels.findIndex(p => p.id === id), 1);
        this.alertify.success('Model removed successfully');
      }, error => {
        this.alertify.error('failed to delele the model ');
      });
    });
  }


  cancel() {
    this.supplierForm.reset(this.model);
    this.brandForm.reset(this.model);
    this.modelForm.reset(this.model);
  }


}
