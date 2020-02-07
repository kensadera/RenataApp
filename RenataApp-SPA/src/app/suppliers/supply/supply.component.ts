import { Component, OnInit, HostListener, ViewChild, Input } from '@angular/core';
import { UserService } from 'src/app/_services/user.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { AuthService } from 'src/app/_services/auth.service';
import { Supplier } from 'src/app/_models/supplier';
import { NgForm } from '@angular/forms';
import { Phonetype } from 'src/app/_models/phonetype';

@Component({
  selector: 'app-supply',
  templateUrl: './supply.component.html',
  styleUrls: ['./supply.component.css']
})
export class SupplyComponent implements OnInit {
suppliers: Supplier[];
@Input() phonetype: Phonetype[];
model: any = {};
@ViewChild('supplyForm', { static: true}) supplyForm: NgForm;
@HostListener('window:beforeunload', ['$event'])
unloadNotification($event: any) {
  if (this.supplyForm.dirty) {
    $event.returnValue = true;
  }
}
  constructor(private userService: UserService,
              private alertify: AlertifyService,
              private authService: AuthService) { }

  ngOnInit() {
    this.loadSuppliers();
  }
  loadSuppliers() {
    // tslint:disable-next-line: no-string-literal
    this.userService.getSuppliers().subscribe((suppliers: Supplier[]) => {
      this.suppliers = suppliers;
    }, error => {
      this.alertify.error(error);
    });
  }

}
