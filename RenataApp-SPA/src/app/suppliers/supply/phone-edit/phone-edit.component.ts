import { Component, OnInit, Input, ViewChild, HostListener } from '@angular/core';
import { Phone } from 'src/app/_models/phone';
import { UserService } from 'src/app/_services/user.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-phone-edit',
  templateUrl: './phone-edit.component.html',
  styleUrls: ['./phone-edit.component.css']
})
export class PhoneEditComponent implements OnInit {
phone: Phone;
@ViewChild('editForm', { static: true}) editForm: NgForm;
@HostListener('window:beforeunload', ['$event'])
unloadNotification($event: any) {
  if (this.editForm.dirty) {
    $event.returnValue = true;
  }
}


constructor(private userService: UserService,
            private alertify: AlertifyService,
            private route: ActivatedRouteSnapshot,
            private authService: AuthService) { }

  ngOnInit() {
  }


  updatePhone() {
    this.userService.updatePhone(this.route.params.id).subscribe(next => {
      this.alertify.success('phone detail updated successfully');
      this.editForm.reset();
    }, error => {
      this.alertify.error(error);
    });
  }

}
