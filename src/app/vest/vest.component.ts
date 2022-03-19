import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../navbar.service';
import vestiText from '../../assets/vesti.json';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-vest',
  templateUrl: './vest.component.html',
  styleUrls: ['./vest.component.css'],
})

///////////////////////////////////////////////////////

export class VestComponent implements OnInit {
  vestiJson = vestiText;  
  vestiLastIndex: number = 10;
  vestiJsonIndex: string[] = ['0','3', '7'];
  vestiJsonIndexH: string[] = ['0H', '3H', '7H']
  vestiExtension: string[] = ['.jpeg', '.jpeg', '.jpeg']
  directoryPath: String = '../../assets/img/skola/' 
  imagePathEnding = this.getImgPathEnding()
  frontImg = document.getElementById("frontImg")


  currentVestiNumber: number = 0;
  currentVestiString: string = this.currentVestiNumber + '';
  currentVestiExtension = this.vestiExtension[this.currentVestiNumber]
  currentVestiGallery: string[] = new Array();  


  getImagePath() {
    return this.directoryPath + this.getImgPathEnding()
  } 
  getFrontText() {
    if(this.nav.currentLang.match('rs')){
      return this.vestiJson[this.vestiJsonIndex[this.currentVestiNumber]];
    }else {
      return this.vestiJson[this.vestiJsonIndexH[this.currentVestiNumber]]
    }
  }

  frontText: string = this.getFrontText()
  imagePath: string = this.getImagePath()
  tmpImg: string = "";

  
  
  constructor(public nav: NavbarService,  public translate: TranslateService) {

  }
  ngOnInit() {
    this.nav.showS();
    let slk = document.getElementById('slk');
    slk.onmouseover = function () {
      slk.classList.add('hoverIn');
      slk.classList.remove('hoverOut');
    };
    slk.onmouseleave = function () {
      slk.classList.add('hoverOut');
      slk.classList.remove('hoverIn');
    };
  }
  
  //////////////////////////////////////////////////////////
  getNewVesti() {
    this.frontText = this.getFrontText();
    this.imagePath = this.getImagePath()
  }


  getNextVesti() {
    if(this.currentVestiNumber < this.vestiJsonIndex.length-1 ) {
    this.currentVestiNumber = this.currentVestiNumber +1;
    this.getNewVesti()
    }
  }
  getPreviousVesti() {
      if(this.currentVestiNumber > 0) {
      this.currentVestiNumber = this.currentVestiNumber -1;
      this.getNewVesti()
      }
  }
  getImgPathEnding() {
    console.log(this.vestiJsonIndex[this.currentVestiNumber] + this.vestiExtension[this.currentVestiNumber])
    return this.vestiJsonIndex[this.currentVestiNumber] + this.vestiExtension[this.currentVestiNumber]
  }


  setGalleryImages (start : number, end : number) { 
    for(let i = start; i <= end; i++){
      console.log(end)
      this.currentVestiGallery[i] = this.directoryPath.concat(i+".jpeg") 
    }
    return this.currentVestiGallery
  }


  getCurrentImages() { 
    let currNum = this.currentVestiNumber
    let currNumNext = currNum + 1 
    this.currentVestiGallery = []

    if(currNum === this.vestiJsonIndex.length-1){
      this.setGalleryImages(parseInt(this.vestiJsonIndex[currNum]), this.vestiLastIndex)
    } else {
      console.log(parseInt(this.vestiJsonIndex[currNumNext]))
      this.setGalleryImages(parseInt(this.vestiJsonIndex[currNum]), parseInt(this.vestiJsonIndex[currNumNext])-1)
    }
    console.log(this.currentVestiGallery)
  }

}