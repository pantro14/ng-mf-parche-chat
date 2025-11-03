import { Component } from '@angular/core';
import { NxWelcome } from './nx-welcome';

@Component({
  imports: [NxWelcome],
  selector: 'pch-login-entry',
  template: `<pch-nx-welcome></pch-nx-welcome>`,
})
export class RemoteEntry {}
