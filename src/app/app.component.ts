import { Component, ViewChild } from '@angular/core';
import { InfoBoxComponent } from './info-box/info-box.component';
import { Coords } from './mouse-cursor/mouse-cursor.component';

@Component({
  selector: 'sts-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(InfoBoxComponent)
  box: InfoBoxComponent;

  title = 'swarco-november';

  intial = {
    x: 127,
    y: 32
  };

  handleCoords(value: Coords): void {
    console.log(value);
    this.box.toggle();
  }
}
