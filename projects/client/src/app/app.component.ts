import { Component } from '@angular/core';

import { primary } from  './_variables_export.module.scss';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = primary;
}
