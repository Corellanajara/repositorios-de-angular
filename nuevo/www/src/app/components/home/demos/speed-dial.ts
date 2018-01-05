import {Component} from '@angular/core';

@Component({
  selector: 'ons-page[speed-dial]',
  template: `
  <ons-toolbar>
    <div class="left"><ons-back-button>Atrás</ons-back-button></div>
    <div class="center"> Boton que hace aparecer cosas</div>
  </ons-toolbar>

  <div class="page__background"></div>
  <div class="page__content">
    <p>Al apretar el boton flotante aparecen objetos como en un menu.</p>
    <ons-speed-dial position="bottom right">
      <ons-fab>+</ons-fab>
      <ons-speed-dial-item>a</ons-speed-dial-item>
      <ons-speed-dial-item>b</ons-speed-dial-item>
      <ons-speed-dial-item>c</ons-speed-dial-item>
    </ons-speed-dial>
  </div>
  `,
})
export class SpeedDial {
}
