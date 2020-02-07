import { Component, OnInit, Input, ViewChild, HostListener } from '@angular/core';
import { UserService } from 'src/app/_services/user.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { AuthService } from 'src/app/_services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { Supplier } from 'src/app/_models/supplier';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-supply-detail',
  templateUrl: './supply-detail.component.html',
  styleUrls: ['./supply-detail.component.css']
})
export class SupplyDetailComponent implements OnInit {
@ViewChild('addForm', { static: true}) addForm: NgForm;
model: any = {};

@HostListener('window:beforeunload', ['$event'])
unloadNotification($event: any) {
  if (this.addForm.dirty) {
    $event.returnValue = true;
  }
}


  constructor(private userService: UserService,
              private alertify: AlertifyService,
              private authService: AuthService,
              private route: ActivatedRoute) { }

  ngOnInit() {
  }

  createSupplier(model) {
    this.userService.createSupplier(this.model).subscribe(next => {
      this.alertify.success('Supplier added successfully');
      console.log(this.authService.decodedToken.nameid);
      this.addForm.reset();
    }, error => {
      this.alertify.error(error);
    });
  }


  cancel() {
    this.addForm.reset(this.model);
  }


}
