import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-social-info',
  templateUrl: './social-info.component.html',
  styleUrls: ['./social-info.component.css']
})
export class SocialInfoComponent {

  @Input()
  public hotel: Hotel;

  public constructor() { }

}
