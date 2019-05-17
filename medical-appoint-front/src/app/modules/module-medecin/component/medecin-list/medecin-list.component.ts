import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-medecin-list',
  template: `
    <p>
     {{pageTitle}}
    </p>
  `,
  styleUrls: ['./medecin-list.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class MedecinListComponent implements OnInit {

  pageTitle = 'Gestion by Medecin';
  constructor() { }

  ngOnInit() {
  }

}
