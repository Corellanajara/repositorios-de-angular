import {Component} from '@angular/core';
import {onsPlatform} from 'angular2-onsenui';

@Component({
  selector: 'tabbar',
  templateUrl: 'app/components/tabbar/tabbar.html',
  styleUrls: ['app/components/tabbar/tabbar.css'],
})
export class Tabbar {
  tabs: Array<any>;
  material: boolean;

  constructor() {
    this.tabs = [
      { path: 'home',       label: 'Principal',       },
      { path: 'forms',      label: 'Formularios',      },
      { path: 'dialogs',    label: 'Dialogos',    },
      { path: 'animations', label: 'Animaciones', },
    ];
    this.material = onsPlatform.isAndroid();
  }

  updateStyle(platform: string) {
    this.material = platform === 'android';
  }

}
