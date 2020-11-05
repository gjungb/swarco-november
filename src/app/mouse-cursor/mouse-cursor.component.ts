import { Component, OnInit } from '@angular/core';

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
  coords: Coords = {
    x: 0,
    y: 0,
  };

  constructor() {}

  ngOnInit(): void {}

  updateCoords({ offsetX: x, offsetY: y }: MouseEvent): void {
    this.coords = {
      x,
      y,
    };
  }
}
