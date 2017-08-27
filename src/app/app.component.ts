import { Component } from '@angular/core';
// import { ServerElementsComponent } from './server-elements/server-elements.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type: 'server', name: 'Testserver', content: 'just a test'}];
}
