import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'app/services/user.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Output()
  toggleSidebarForMe: EventEmitter<any> = new EventEmitter();

  user!: any;
  constructor(private router: Router, private userService: UserService, private http: HttpClient) {
    this.userService.userSubject.subscribe((user: any) => {
      this.user = user;
      console.log("user in header:", user);
      if (this.user.imagePath == null) {
        this.user.imagePath = "data:image/png;base64," + user.content;
      }
    });
  }


  ngOnInit(): void {


  }



  toggleSidebar() {
    this.toggleSidebarForMe.emit();
  }

  goToLogin() {
    this.router.navigate(['login']);
  }

  // without user signin , later corrected with user signin only
  showUserProfile() {
    this.router.navigate(['profile']);
  }



}
