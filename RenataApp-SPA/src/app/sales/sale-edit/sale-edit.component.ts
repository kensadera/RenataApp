import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { BsDatepickerConfig } from 'ngx-bootstrap';
import { Sale } from 'src/app/_models/sale';
import { UserService } from 'src/app/_services/user.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sale-edit',
  templateUrl: './sale-edit.component.html',
  styleUrls: ['./sale-edit.component.css']
})
export class SaleEditComponent implements OnInit {
  sale: any;
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
    this.loadSale();
  }

  updateSale(sale) {
    this.userService.updateSale(this.route.snapshot.params.id, this.sale).subscribe(next => {
      this.alertify.success('Sale detail updated successfully');
      this.editForm.reset();
    }, error => {
      this.alertify.error(error);
    });
  }
  loadSale() {
    this.userService.getSale(this.route.snapshot.params.id).subscribe((sale: Sale) => {
      this.sale = sale;
    }, error => {
      this.alertify.error(error);
    });
  }

}
