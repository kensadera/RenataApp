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
  pagination: Pagination;


  constructor(private userService: UserService,
              private alertify: AlertifyService,
              private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.data.subscribe(data => {
      this.inventories = data.inventories.result;
      this.pagination = data.inventories.pagination;
    });

  }




  pageChanged(event: any): void {
    this.pagination.currentPage = event.page;
    this.loadInventories();
  }

  loadInventories() {
    this.userService.getInventories(this.pagination.currentPage, this.pagination.itemsPerPage)
    .subscribe(
      (res: PaginatedResult<Inventory[]>) => {
      this.inventories = res.result;
      this.pagination = res.pagination;
    },
    error => {
      this.alertify.error(error);
    });
  }

}
