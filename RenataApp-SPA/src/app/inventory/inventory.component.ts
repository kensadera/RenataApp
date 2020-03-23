import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { AlertifyService } from '../_services/alertify.service';
import { Inventory } from '../_models/inventory';
import { ActivatedRoute } from '@angular/router';
import { Pagination, PaginatedResult } from '../_models/pagination';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
  inventories: Inventory[];


  constructor(private userService: UserService,
              private alertify: AlertifyService,
              private route: ActivatedRoute) { }

  ngOnInit() {
   this.loadInventories();

  }



  loadInventories() {
    this.userService.getInventories().subscribe((inventories: Inventory[]) => {
      this.inventories = inventories;
    }, error => {
      this.alertify.error(error);
    });
  }
}
