import { OnInit, Component } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';
import { UserType } from 'src/app/models/user';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  constructor(
    private accountService: AccountService
  ) { }

  ngOnInit(): void { }

  get isDeveloper() {
    return this.accountService.getUserType() === UserType.Developer;
  }

  get isAdmin() {
    return this.accountService.getUserType() === UserType.Admin;
  }

  get isCompany() {
    return this.accountService.getUserType() === UserType.Company;
  }
}
