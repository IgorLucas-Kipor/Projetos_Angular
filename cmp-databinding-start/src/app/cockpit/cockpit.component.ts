
import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output('srvCreated') serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('brCreated') blueprintCreated = new EventEmitter<{blueprintName: string, blueprintContent: string}>();
  // newServerName = '';
  // newServerContent = '';
  @ViewChild('serverContentInput', {static: true}) serverContentInput: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(serverNameInput: HTMLInputElement, serverContentInput: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: serverNameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

  onAddBlueprint(serverNameInput: HTMLInputElement, serverContentInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      blueprintName: serverNameInput.value,
      blueprintContent: this.serverContentInput.nativeElement.value
    });
  }

}
