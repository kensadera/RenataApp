import { Component, OnInit, HostListener, ViewChild, Input, Output } from '@angular/core';
import { UserService } from 'src/app/_services/user.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { AuthService } from 'src/app/_services/auth.service';
import { Supplier } from 'src/app/_models/supplier';
import { NgForm } from '@angular/forms';
import { PhoneType } from 'src/app/_models/phoneType';
import { PhoneModel } from 'src/app/_models/phoneModel';
import { Phone } from 'src/app/_models/phone';
import { ActivatedRoute } from '@angular/router';
import { BsDatepickerConfig } from 'ngx-bootstrap';
import { PaginatedResult, Pagination } from 'src/app/_models/pagination';

@Component({
  selector: 'app-supply',
  templateUrl: './supply.component.html',
  styleUrls: ['./supply.component.css']
})
export class SupplyComponent implements OnInit {
suppliers: Supplier[];
phonetypes: PhoneType[];
phonemodels: PhoneModel[];
phones: Phone[];
model: any = {};
bsConfig: Partial<BsDatepickerConfig>;
phoneParams: any = {};
pagination: Pagination;


@ViewChild('supplyForm', { static: true}) supplyForm: NgForm;
@HostListener('window:beforeunload', ['$event'])
unloadNotification($event: any) {
  if (this.supplyForm.dirty) {
    $event.returnValue = true;
  }
}

  constructor(private userService: UserService,
              private alertify: AlertifyService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.bsConfig = { containerClass: 'theme-red'},

    this.route.data.subscribe(data => {
      this.suppliers = data.suppliers;
      this.phonetypes = data.phonetypes;
      this.phonemodels = data.phonemodels;

      this.phones = data.phones.result;
      this.pagination = data.phones.pagination;

    });

  }

  pageChanged(event: any): void {
    this.pagination.currentPage = event.page;
    this.loadPhones();
  }

  loadPhones() {
    this.userService.getPhones(this.pagination.currentPage, this.pagination.itemsPerPage, this.phoneParams)
    .subscribe(
      (res: PaginatedResult<Phone[]>) => {
      this.phones = res.result;
      this.pagination = res.pagination;
    },
    error => {
      this.alertify.error(error);
    });
  }

  createPhone(model) {
    this.userService.createPhone(this.model).subscribe(next => {
    this.alertify.success('supply details added successfully');
    this.supplyForm.reset();
    }, error => {
      this.alertify.error(error);
    });
  }

  deletePhone(id: number) {
    this.alertify.confirm('Are you sure you want to delete the supply detail?', () => {
      this.userService.deletePhone(id).subscribe(() => {
        this.phones.slice(this.phones.findIndex(p => p.id === id), 1);
        this.alertify.success('Supply detail removed successfully');
      }, error => {
        this.alertify.error('failed to delele the supply details');
      });
    });
  }

}
