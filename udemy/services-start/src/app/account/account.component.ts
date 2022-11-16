import { Component,  Input } from '@angular/core';
import { AccountService } from '../accoint.service';
import { LoggingService } from '../loggin.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // providers: [LoggingService,AccountService]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;
  constructor(private loggingService: LoggingService, private accService: AccountService){}

  onSetTo(status: string) {
    this.accService.updateStatus(this.id, status)
    // this.loggingService.logStatusChange(status)
    this.accService.statusUpdated.emit(status)
  }
}
