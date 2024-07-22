import {Component} from '@angular/core';
import {HomeComponent} from './home/home.component';
import {RouterLink, RouterOutlet} from '@angular/router';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UserLoginComponent, RouterLink, RouterOutlet, FormsModule],
  template: `
    <main>
      <section class="content">
        <router-outlet></router-outlet>
      </section>
    </main>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'homes';
}
