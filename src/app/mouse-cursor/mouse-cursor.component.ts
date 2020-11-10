import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

/**
 * Koordinaten
 */
export type Coords = {
  /**
   * Die x-Koordinate relativ zur loE
   */
  x: number;
  y: number;
};

@Component({
  selector: 'sts-mouse-cursor',
  templateUrl: './mouse-cursor.component.html',
  styleUrls: ['./mouse-cursor.component.css'],
})
export class MouseCursorComponent implements OnInit {
  // tslint:disable-next-line: no-input-rename
  @Input('stsCoords')
  coords: Coords;

  @Output()
  coordsChange = new EventEmitter<Coords>();

  constructor() {}

  ngOnInit(): void {}

  fixCoords(): void {
    this.coordsChange.emit(this.coords);
  }

  updateCoords({ offsetX: x, offsetY: y }: MouseEvent): void {
    this.coords = {
      x,
      y,
    };
  }
}
