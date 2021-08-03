import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styles: [`
    .white {
      color: white;
    }
  `]
})
export class ServersComponent implements OnInit {
  displayPassword = false;
  loggedValue = [];
  constructor() { 
    
  }

  ngOnInit(): void {
  }

  changeDisplay() {
    this.displayPassword = !this.displayPassword;
    this.loggedValue.push(this.loggedValue.length+1)
  }


}