import { Subscription } from 'rxjs/Subscription';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { AuthService } from './../../auth/auth.service';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit, OnDestroy {
@Output() closeMenu = new EventEmitter<void>();
  constructor(private _authService: AuthService) { }
  isAuth = false;
  authSubscription: Subscription;
  ngOnInit() {
    this.authSubscription = this._authService.authChange.subscribe(authStatus => {
      this.isAuth = authStatus;
    });
  }

  ngOnDestroy() {
    this.authSubscription.unsubscribe();
  }

  onMenuClose() {
    this.closeMenu.emit();
    console.log('test');
  }

}
