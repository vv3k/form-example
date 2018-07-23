import {
  Component,
  OnInit,
  AfterViewInit,
  AfterContentInit,
} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BsModalRef} from 'ngx-bootstrap/modal/bs-modal-ref.service';
import {Form} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import {Store} from '@ngrx/store';

import {Profile} from '../../models/form.model';
import {Global} from '../../common/global';
import {AppState} from '../../app.state';
import * as formActions from '../../actions/form.action';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css'],
})
export class UserformComponent implements OnInit, AfterContentInit {
  userList: Observable<Profile[]>;

  constructor(
    private fb: FormBuilder,
    public bsModalRef: BsModalRef,
    public global: Global,
    private store: Store<AppState>
  ) {
    // this.store = store.select('Profiles');
  }

  userForm: FormGroup;
  title: string;
  index: number;
  public rowData: Profile;

  ngOnInit() {
    this.initializeForm();
  }

  ngAfterContentInit() {
    console.log(this.rowData);
    // this.userForm.patchValue(this.rowData);
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

  onSave(formData: FormGroup) {
    debugger;
    if (this.title === 'Edit Data') {
      // Edit save Logic
      this.store.dispatch(new formActions.EditProfileRow(formData.value));
    } else {
      // Add Save Logic
      this.store.dispatch(new formActions.AddProfileRow(formData.value));
      this.userForm.reset();
    }

    this.bsModalRef.hide();
    // this.global.count = this.global.dbData.length + 1;
    // this.userForm.patchValue(formdata.value);
  }
}
