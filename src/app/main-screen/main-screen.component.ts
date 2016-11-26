import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.css']
})
export class MainScreenComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  signout() {
    this.router.navigate(['/']);
  }

  showSettingsScreen() {
    this.router.navigate(['/main/settings']);
  }

}
