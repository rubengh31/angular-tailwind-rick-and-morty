import { DOCUMENT } from '@angular/common';
import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  @Output() mode = new EventEmitter<boolean>();
  setDark = false;

  constructor(
    @Inject(DOCUMENT) public document: Document,
    public auth: AuthService
  ) {}

  onChangeToggle() {
    this.setDark = !this.setDark;
    this.mode.emit(this.setDark);
    // console.log(this.setDark);
  }
}
