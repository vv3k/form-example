import {Component, OnInit, AfterViewInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BsModalRef} from 'ngx-bootstrap/modal/bs-modal-ref.service';

import {Global} from '../../common/global';
import { Form } from '@angular/forms/src/directives/form_interface';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css'],
})
export class UserformComponent implements OnInit, AfterViewInit {
  constructor(private fb: FormBuilder, public bsModalRef: BsModalRef, public global: Global) {}

  userForm: FormGroup;
  title: string;
  index: number;

  ngOnInit() {
    this.initializeForm();
  }

  ngAfterViewInit() {
    
  }

  initializeForm() {
    this.userForm = this.fb.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      surname: ['', Validators.required],
      birthdate: ['', Validators.required],
      phone: ['', Validators.required],
      city: ['', Validators.required],
      street: ['', Validators.required],
      number: ['', Validators.required],
    });

    
  }

  onSave(formdata: FormGroup) {
    this.global.count = this.global.dbData.length + 1;
    // this.userForm.patchValue(formdata.value);
  }
}
