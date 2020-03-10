import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { Store } from '../_models/store';
import { PhoneType } from '../_models/phoneType';
import { UserService } from '../_services/user.service';
import { AlertifyService } from '../_services/alertify.service';
import { PhoneModel } from '../_models/phoneModel';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BsDatepickerConfig } from 'ngx-bootstrap';
import { Inventory } from '../_models/inventory';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
stores: Store[];
phonetypes: PhoneType[];
phonemodels: PhoneModel[];
inventories: Inventory[];
model: any = {};
bsConfig: Partial<BsDatepickerConfig>;

@ViewChild('inventoryForm', { static: true}) inventoryForm: NgForm;
@ViewChild('editForm', { static: true}) editForm: NgForm;
@HostListener('window:beforeunload', ['$event'])
unloadNotification($event: any) {
  if (this.inventoryForm.dirty) {
    $event.returnValue = true;
  }
}
  constructor(private userService: UserService, private alertify: AlertifyService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.bsConfig = { containerClass: 'theme-red'},

    this.route.data.subscribe(data => {
      this.stores = data.stores;
      this.phonetypes = data.phonetypes;
      this.phonemodels = data.phonemodels;
      this.inventories = data.inventories;
    });

  }


  createInventory(model) {
    this.userService.createInventory(this.model).subscribe(next => {
      this.alertify.success('Shop inventory added successfully');
      this.inventoryForm.reset();
    }, error => {
      this.alertify.error(error);
    });
  }

  deleteInventory(id: number) {
    this.alertify.confirm('Are you sure you want to delete the inventory detail?', () => {
      this.userService.deletePhone(id).subscribe(() => {
        this.inventories.slice(this.inventories.findIndex(p => p.id === id), 1);
        this.alertify.success('Shop detail removed successfully');
      }, error => {
        this.alertify.error('failed to delele the inventory details');
      });
    });
  }

}
