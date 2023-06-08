import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent {

  @Input() public img: string = ""
  public imgDefault: string = "./assets/images/noImage.jpg"
  @Output() public loaded = new EventEmitter()

  imgError() {
    this.img = this.imgDefault
  }

  imgLoaded() {
    console.log("Loaded hijo")
    this.loaded.emit()
  }

}
