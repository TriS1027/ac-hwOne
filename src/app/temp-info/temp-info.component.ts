import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-temp-info',
  templateUrl: './temp-info.component.html',
  styleUrls: ['./temp-info.component.css']
})
export class TempInfoComponent {

  @Input()
  public hotel: Hotel;

  public constructor() { }

}
