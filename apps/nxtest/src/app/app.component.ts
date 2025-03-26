import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { NgCoreComponent } from '@nxtest/ng-core';

@Component({
  imports: [NxWelcomeComponent, RouterModule, NgCoreComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'nxtest';
}
