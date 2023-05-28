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

  userName!:string;
  constructor(private router: Router, private userService:UserService) {

   }

   ngOnInit(): void {
    this.userService.userNamebSubject.subscribe((username: string) => {
      this.userName = username;
    });
  }

  toggleSidebar() {
    this.toggleSidebarForMe.emit();
  }

  goToLogin(){
    this.router.navigate(['login']);
  }

// without user signin , later corrected with user signin only
  showUserProfile(){
    this.router.navigate(['profile']);
  }
}
