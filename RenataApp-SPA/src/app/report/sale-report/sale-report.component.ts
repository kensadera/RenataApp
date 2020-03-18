import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/_services/user.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { Sale } from 'src/app/_models/sale';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sale-report',
  templateUrl: './sale-report.component.html',
  styleUrls: ['./sale-report.component.css']
})
export class SaleReportComponent implements OnInit {
  sales: Sale[];


  constructor(private userService: UserService,
              private alertify: AlertifyService,
              private route: ActivatedRoute) { }
  ngOnInit() {
    this.route.data.subscribe(data => {
      this.sales = data.sales;
    });
  }

}
