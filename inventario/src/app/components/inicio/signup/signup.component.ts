import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {

  @Output() emisor: EventEmitter<boolean> = new EventEmitter();
  @Output() atras:  EventEmitter<boolean> = new EventEmitter();


  constructor() { }

  ngOnInit() {}

  atrass(){
    this.atras.emit();
  }
  

}
