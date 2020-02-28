import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/_services/user.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { AuthService } from 'src/app/_services/auth.service';
import { Phonetype } from 'src/app/_models/phonetype';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-phonetypes',
  templateUrl: './phonetypes.component.html',
  styleUrls: ['./phonetypes.component.css']
})
export class PhonetypesComponent implements OnInit {
phonetypes: Phonetype[];
phonetype: Phonetype;
model: any = {};

  constructor(private userService: UserService,
              private alertify: AlertifyService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.loadPhoneTypes();
  }

  loadPhoneType() {
    this.userService.getPhonetype(+this.route.snapshot.params.id).subscribe((phonetype: Phonetype) => {
      this.phonetype = phonetype;
    }, error => {
      this.alertify.error(error);
    });
  }

  loadPhoneTypes() {
    // tslint:disable-next-line: no-string-literal
    this.userService.getPhonetypes().subscribe((phonetypes: Phonetype[]) => {
      this.phonetypes = phonetypes;
    }, error => {
      this.alertify.error(error);
    });
  }

}
