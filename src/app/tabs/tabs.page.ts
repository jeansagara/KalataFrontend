import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {
  User:any
  roles: string[] = [];
  monRole: any;

  constructor(private authService:AuthService,private storageService:StorageService,private route:Router) { }
  logout(): void {
    this.authService.logout().subscribe({
      next: res => {
        console.log(res);
        this.storageService.clean();

        // window.location.reload();
        this.route.navigateByUrl("/connexion")
      },
      error: err => {
        console.log(err);
      }
    });
  }

  ngOnInit() {
    this.User= this.storageService.getUser();
    console.log("id path" + this.User)
  if(this.User.id != null){
    this.roles = this.storageService.getUser().roles;
    console.log(this.roles);
if(this.roles[0] !='ROLE_ELECTEUR'){
  this.monRole = this.roles[0]
}

  }

  }

}
