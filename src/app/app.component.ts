import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  public Name : string = ""

  public LowerCase : string = ""


  Upper(){
    this.Name = "Marvellous Infosystems"
  }

  Lower(){
    this.LowerCase = "Marvellous Infosystems"
  }
}
