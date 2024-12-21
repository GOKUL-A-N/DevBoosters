import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { PostsComponent } from '../posts/posts.component';

@Component({
  selector: 'app-home',
  imports: [NavbarComponent,PostsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
