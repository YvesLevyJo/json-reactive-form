import { Component } from '@angular/core';
import { JsonFormData } from '../model/JsonFormDate';
import { HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public formData: JsonFormData;
 
  constructor(private http: HttpClient){}

  ngOnInit(){
    this.http
    .get('assets/my-form.json')
    .subscribe((formData : JsonFormData) => {
      this.formData = formData;
    })
  }
}
