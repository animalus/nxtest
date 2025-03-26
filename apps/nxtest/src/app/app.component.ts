import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { NgCoreComponent } from '@nxtest/ng-core';
import { sharedA } from '@nxtest/shared-a';
import { sharedB, sharedBA } from '@nxtest/shared-b';

@Component({
  imports: [NxWelcomeComponent, RouterModule, NgCoreComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'nxtest';
  sharedA() {
    return `Shared A library reports [${sharedA()}]`;
  }
  sharedB() {
    return `Shared B library reports [${sharedB()}] and [${sharedBA()}]`;
  }
}
