import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  @Output() emisor: EventEmitter<boolean> = new EventEmitter();
  @Output() atras:  EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  algo(){
    console.log('hola yo hago algo');
    this.emisor.emit(true);
  }

}
