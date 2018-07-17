import {Component, OnInit} from '@angular/core';
import {CommonService} from '../../services/common.service';
import {BsModalService} from 'ngx-bootstrap/modal';
import {BsModalRef} from 'ngx-bootstrap/modal/bs-modal-ref.service';
import {UserformComponent} from '../userform/userform.component';

import {Global} from '../../common/global';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css'],
})
export class UserlistComponent implements OnInit {
  constructor(
    private service: CommonService,
    private modalService: BsModalService,
    public global: Global
  ) {}

  modalRef: BsModalRef;
  userList: Array<Object> = [];
  columns: Array<String> = [];

  ngOnInit() {
    this.initialize();
  }

  initialize() {
    this.service.getUsers().subscribe(data => {
      if (data && data['names'] !== null) {
        this.userList = data['names'];
        this.columns = Object.keys(data['names'][0]);
        this.global.dbData = this.userList;
        this.global.count = this.userList.length;
      }
    });
  }

  editRow(idx: number) {
    const initialState = {
      title: 'Edit Data',
      index: idx,
    };
    this.modalRef = this.modalService.show(UserformComponent, {initialState});
  }
}
