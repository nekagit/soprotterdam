import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../navbar.service';
import vestiText from '../../assets/vesti.json';

@Component({
  selector: 'app-vest',
  templateUrl: './vest.component.html',
  styleUrls: ['./vest.component.css'],
})

export class VestComponent implements OnInit {
  
  vestiJson = vestiText;  
  vestiJsonIndex: string[] = ['0','3'];
  vestiExtension: string[] = ['.jpeg', '.jpeg']
  directoryPath: String = '../../assets/img/skola/' 
  frontImg = document.getElementById("frontImg") as HTMLImageElement;

  currentVestiNumber: number = 0;
  currentVestiString: string = this.currentVestiNumber + '';
  currentVestiExtension = this.vestiExtension[this.currentVestiNumber]  
  getImgPathEnding() {
    return this.vestiJsonIndex[this.currentVestiNumber] + this.vestiExtension[this.currentVestiNumber]
  }
  imagePathEnding = this.getImgPathEnding()

  getImagePath() {
    return this.directoryPath + this.getImgPathEnding()
  } 
  getFrontText() {
    return this.vestiJson[this.vestiJsonIndex[this.currentVestiNumber]];
  }

  frontText: string = this.getFrontText()
  imagePath: string = this.getImagePath()
  tmpImg: string = "";
  
  getNewVesti() {
    this.frontText = this.getFrontText();
    this.imagePath = this.getImagePath()
    console.log(this.imagePath)
    this.tmpImg = '<img id="frontImg" class="frontImage" [src]="' + this.imagePath +' />';
    this.frontImg.replaceWith(this.tmpImg) 
    
  }

  


  constructor(public nav: NavbarService) {}

  ngOnInit() {
    this.nav.showS();

    document.getElementById('slk').onmouseover = function () {
      document.getElementById('slk').classList.add('hoverIn');
      document.getElementById('slk').classList.remove('hoverOut');
    };
    document.getElementById('slk').onmouseleave = function () {
      document.getElementById('slk').classList.add('hoverOut');
      document.getElementById('slk').classList.remove('hoverIn');
    };
  }
  
  getNextVesti() {
    console.log(this.currentVestiNumber)
    if(this.currentVestiNumber < 2 && this.currentVestiNumber >= 0) {
      
    this.currentVestiNumber = this.currentVestiNumber +1;
    this.getNewVesti()
    }
  }
  getPreviousVesti() {
    if(this.currentVestiNumber < 2 && this.currentVestiNumber >= 0) {
      
      this.currentVestiNumber = this.currentVestiNumber -1;
      this.getNewVesti()
      }
  }
}
