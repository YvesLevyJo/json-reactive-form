import { Input, Component, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {HttpClient} from '@angular/common/http'
import { JsonFormData } from '../model/JsonFormDate';

@Component({
  selector: 'app-json-form',
  templateUrl: './json-form.component.html',
  styleUrls: ['./json-form.component.css']
})
export class JsonFormComponent implements OnChanges
{

@Input()
jsonFormData : JsonFormData;

ngOnChanges(changes: SimpleChanges): void {
 if(!changes['jsonFormData'].firstChange){
  console.log(this.jsonFormData);
 }  
}

}
