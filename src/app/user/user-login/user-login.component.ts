import { Component, OnInit } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: "app-user-login",
  imports: [FormsModule],
  template: `
  <div class="topContainer">
  <div class="main">  	
    <input type="checkbox" id="chk" aria-hidden="true">

        <div class="signup">
            <form>
                <label for="chk" aria-hidden="true">Sign up</label>
                <input type="text" name="txt" placeholder="User name" [(ngModel)]="signupObj.userName">
                <input type="email" name="email" placeholder="Email"  [(ngModel)]="signupObj.email">
                <input type="password" name="pswd" placeholder="Password"  [(ngModel)]="signupObj.password">
                <button (click)="onSignUp()">Sign up</button>
            </form>
        </div>

        <div class="login">
            <form>
                <label for="chk" aria-hidden="true">Login</label>
                <input type="email" name="email" placeholder="Email" [(ngModel)]="loginObj.email">
                <input type="password" name="pswd" placeholder="Password" [(ngModel)]="loginObj.password">
                <button (click)="onLogin()">Login</button>
            </form>
        </div>
    </div>
    </div>
`,
  styleUrls: ["./user-login.component.css"],
  standalone: true,
})
export class UserLoginComponent implements OnInit {

    signupUsers: any[] = [];
    signupObj: any = {
        userName: "",
        email: "",
        password: "",
    };

    loginObj: any = {
        email: "",
        password: "",
    };
    
    constructor(private router: Router) {}

  ngOnInit(): void {
    const localData = localStorage.getItem("signupUsers");
    if (localData) {
      this.signupUsers = JSON.parse(localData);
    }
  }

  onSignUp() {
    this.signupUsers.push(this.signupObj);
    localStorage.setItem("signupUsers", JSON.stringify(this.signupUsers));
    this.signupObj = {
        userName: "",
        email: "",
        password: "",
    };
    this.router.navigate(['/home']);
  }
  onLogin() {
    const isUserExist = this.signupUsers.find(user => user.email === this.loginObj.email && user.password === this.loginObj.password);
    if (isUserExist) {
        this.router.navigate(['/home']);
    } else {
        alert("Login failed");
    }
  }
}