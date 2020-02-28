import { Component, OnInit, Input, ViewChild, HostListener } from '@angular/core';
import { UserService } from 'src/app/_services/user.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { AuthService } from 'src/app/_services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { Supplier } from 'src/app/_models/supplier';
import { NgForm } from '@angular/forms';
import { Phonetype } from 'src/app/_models/phonetype';

@Component({
  selector: 'app-supply-detail',
  templateUrl: './supply-detail.component.html',
  styleUrls: ['./supply-detail.component.css']
})
export class SupplyDetailComponent implements OnInit {
phonetypes: Phonetype[];

@ViewChild('addForm', { static: true}) addForm: NgForm;
@ViewChild('brandForm', { static: true}) brandForm: NgForm;
@ViewChild('modelForm', { static: true}) modelForm: NgForm;
model: any = {};

@HostListener('window:beforeunload', ['$event'])
unloadNotification($event: any) {
  if (this.addForm.dirty || this.brandForm.dirty || this.modelForm.dirty) {
    $event.returnValue = true;
  }
}


  constructor(private userService: UserService,
              private alertify: AlertifyService,
              private authService: AuthService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.loadPhonetypes();
  }

  createSupplier(model) {
    this.userService.createSupplier(this.model).subscribe(next => {
      this.alertify.success('Supplier added successfully');
      this.addForm.reset();
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



  loadPhonetypes() {
    this.userService.getPhonetypes().subscribe((phonetypes: Phonetype[]) => {
      this.phonetypes = phonetypes;
    }, error => {
      this.alertify.error(error);
    });
  }

  cancel() {
    this.addForm.reset(this.model);
  }


}
