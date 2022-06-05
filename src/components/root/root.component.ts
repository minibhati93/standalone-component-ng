import { Component, OnInit } from '@angular/core';
import { ColorMeDirective } from 'src/directives/color-me.directive';
import { CapitalCasePipe } from 'src/pipes/capital-case.pipe';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [CapitalCasePipe, ColorMeDirective],
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss'],
})
export class RootComponent implements OnInit {
  text = "i'm a bootstrapped standalone component";
  constructor() {}

  ngOnInit(): void {}
}
