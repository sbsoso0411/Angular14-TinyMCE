import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  config = {
    init: {
      menubar: false,
      plugins: 'link,  autolink, lists',
      default_link_target: '_blank',
      toolbar: ' link lists | numlist ',
      height: 350,
      branding: false,
      table_responsive_width: true,
      image_advtab: true,
      autoresize_bottom_margin: 20
    },

    editor1: 'Heading 1 Heading 2'
  }
}
