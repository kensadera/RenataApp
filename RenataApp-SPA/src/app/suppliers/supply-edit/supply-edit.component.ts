import { Component, OnInit, Input, ViewChild, HostListener } from '@angular/core';
import { Phone } from 'src/app/_models/phone';
import { UserService } from 'src/app/_services/user.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { NgForm } from '@angular/forms';
import { ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';
import { BsDatepickerConfig } from 'ngx-bootstrap';

@Component({
  selector: 'app-supply-edit',
  templateUrl: './supply-edit.component.html',
  styleUrls: ['./supply-edit.component.css']
})
export class SupplyEditComponent implements OnInit {
phone: any;
bsConfig: Partial<BsDatepickerConfig>;



@ViewChild('editForm', { static: true}) editForm: NgForm;
@HostListener('window:beforeunload', ['$event'])
unloadNotification($event: any) {
  if (this.editForm.dirty) {
    $event.returnValue = true;
  }
}

  constructor(private userService: UserService,
              private alertify: AlertifyService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.bsConfig = { containerClass: 'theme-red'},

    this.loadPhone();
  }

  updatePhone(phone) {
    this.userService.updatePhone(this.route.snapshot.params.id, this.phone).subscribe(next => {
      this.alertify.success('phone detail updated successfully');
      this.editForm.reset();
    }, error => {
      this.alertify.error(error);
    });
  }
  loadPhone() {
    this.userService.getPhone(this.route.snapshot.params.id).subscribe((phone: Phone) => {
      this.phone = phone;
    }, error => {
      this.alertify.error(error);
    });
  }

}
