import { DataDbService } from '../../services/data-db.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'contactForm',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactFrom: FormGroup;
  emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  constructor(
    private dbData: DataDbService
  ) {
    // this.contactFrom =    this.createFormGroup(); el validador Validators.email no funciona muy bine..

    this.contactFrom = new FormGroup({
      email: new FormControl('',[Validators.required, Validators.minLength(5),Validators.pattern(this.emailPattern)]),
      name: new FormControl('',[Validators.required, Validators.minLength(5)]),
      message : new FormControl('',[Validators.required, Validators.minLength(10),Validators.maxLength(100)])
    });
  }

  ngOnInit() {
  }

  onResetForm(){
    this.contactFrom.reset();
  }

  onSaveForm(){
    if (this.contactFrom.valid) {
      this.dbData.saveMessage(this.contactFrom.value );
      this.onResetForm();
      console.log('Valido');

    }else{
      console.log('No valido');
    }
  }

  get name(){ return this.contactFrom.get('name')}
  get email(){ return this.contactFrom.get('email')}
  get message(){ return this.contactFrom.get('message')}
}
