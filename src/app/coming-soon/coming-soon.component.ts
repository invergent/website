import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './coming-soon.component.html',
  styleUrls: ['./coming-soon.component.scss']
})
export class ComingSoonComponent {
  inform:string = '1';
  notify:string = '0';
  scrHeight:any;
  scrWidth:any;
  inputStyles:any = {};

  constructor() { }

  changeState() {
    this.getScreenSize();

    this.inform = '0';
    this.notify = '1';
    this.inputStyles.padding = '0 7px';
    
    if (this.scrWidth < 400) {
      this.inputStyles.height = '45px';
    } else {
      this.inputStyles.width = '70%';
    }
  }

  getScreenSize() {
    this.scrHeight = window.innerHeight;
    this.scrWidth = window.innerWidth;
  }
}
