import { Component, ViewEncapsulation } from '@angular/core';
import SwiperCore, { Pagination } from 'swiper';
SwiperCore.use([Pagination]);

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      console.log(className);
      return `<span class="${className}"> ${(index === 0)?'P':'C'}${index + 1}</span>`;
    },
  };
}
