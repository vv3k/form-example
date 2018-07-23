import {Component, OnInit} from '@angular/core';
import {CommonService} from '../../services/common.service';
import {BsModalService} from 'ngx-bootstrap/modal';
import {BsModalRef} from 'ngx-bootstrap/modal/bs-modal-ref.service';
import {UserformComponent} from '../userform/userform.component';
import {Observable} from 'rxjs/observable';
import {of} from 'rxjs/observable/of';
import {Subscription} from 'rxjs/Subscription';

import {ActionsSubject} from '@ngrx/store';

import {Global} from '../../common/global';
import {Profile} from '../../models/form.model';
import {Store} from '@ngrx/store';
import {AppState} from '../../app.state';
import * as formActions from '../../actions/form.action';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css'],
})
export class UserlistComponent implements OnInit {
  modalRef: BsModalRef;
  userList$: Observable<Profile[]>;
  columns$: Observable<String[]>;
  subsc = new Subscription();

  constructor(
    private service: CommonService,
    private modalService: BsModalService,
    public global: Global,
    private store: Store<AppState>,
    private actionsSubj: ActionsSubject
  ) {}

  ngOnInit() {
    this.initialize();
  }

  initialize() {
    this.service.getUsers().subscribe(data => {
      if (data && data['names'] !== null) {
        this.store.dispatch(new formActions.LoadProfileRow(data['names']));
        this.columns$ = of(Object.keys(data['names'][0]));
      }
    });

    this.subsc = this.actionsSubj.subscribe(data => {
      // debugger;
      if (data.type === 'LOAD_INITIAL_DATA') {
        this.userList$ = this.store.select('Profiles');
      }
      if (data.type === 'ADD_ROW') {
        this.userList$ = this.store.select('Profiles');
      }
    });
  }

  editRow(rowData: Object, idx: number) {
    const initialState = {
      title: 'Edit Data',
      index: idx,
      rowData: rowData,
    };

    this.modalRef = this.modalService.show(UserformComponent, {initialState});
    // this.modalRef.content.rowData = rowData;
  }

  deleteRow(idx: number) {
    debugger;
    this.store.dispatch(new formActions.DeleteProfileRow(idx));
  }
}
