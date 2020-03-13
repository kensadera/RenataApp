import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { Inventory } from 'src/app/_models/inventory';
import { BsDatepickerConfig } from 'ngx-bootstrap';
import { UserService } from 'src/app/_services/user.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shop-edit',
  templateUrl: './shop-edit.component.html',
  styleUrls: ['./shop-edit.component.css']
})
export class ShopEditComponent implements OnInit {
  inventory: any;
  bsConfig: Partial<BsDatepickerConfig>;

@ViewChild('editForm', { static: true}) editForm: NgForm;
@HostListener('window:beforeunload', ['$event'])
unloadNotification($event: any) {
  if (this.editForm.dirty) {
    $event.returnValue = true;
  }
}

  constructor(private userService: UserService, private alertify: AlertifyService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.bsConfig = { containerClass: 'theme-red'};
    this.loadInventory();
  }


  updateInventory(inventory) {
    this.userService.updateInventory(this.route.snapshot.params.id, this.inventory).subscribe(next => {
      this.alertify.success('Inventory detail updated successfully');
      this.editForm.reset();
    }, error => {
      this.alertify.error(error);
    });
  }
  loadInventory() {
    this.userService.getInventory(this.route.snapshot.params.id).subscribe((inventory: Inventory) => {
      this.inventory = inventory;
    }, error => {
      this.alertify.error(error);
    });
  }




}
