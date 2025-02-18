import { Component, OnInit, ViewChild } from '@angular/core';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-home',
  imports: [PopupComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  @ViewChild('popup') popup!: PopupComponent;
  constructor() { }
  items:any = []
  ngOnInit(): void {
    this.items =[
      {
        'left': 0+'px',
        'right': 0+'px',
        'top': 0+'px',
        'bottom': 0+'px'
      }
    ]
  }
  closePopup(){
    this.items.pop()
    setTimeout(()=>{
      for(let i=0;i<500;i++){
        this.items.push({
          'left': Math.floor(Math.random()*1300)+'px',
          'right': Math.floor(Math.random()*1900)+'px',
          'top': Math.floor(Math.random()*1700)+'px',
          'bottom': Math.floor(Math.random()*1400)+'px'
        })
      }
    },500)
  }
}
