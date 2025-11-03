import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcome } from './nx-welcome';

@Component({
  imports: [NxWelcome, RouterModule],
  selector: 'pch-root',
  templateUrl: './app.html',
  styleUrl: './app.sass',
})
export class App {
  protected title = 'parche-chat';
}
