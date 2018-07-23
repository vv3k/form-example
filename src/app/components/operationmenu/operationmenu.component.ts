import {Component, OnInit, TemplateRef} from '@angular/core';
import {BsModalService} from 'ngx-bootstrap/modal';
import {BsModalRef} from 'ngx-bootstrap/modal/bs-modal-ref.service';
import {UserformComponent} from '../userform/userform.component';

import {Profile} from '../../models/form.model';

@Component({
  selector: 'app-operationmenu',
  templateUrl: './operationmenu.component.html',
  styleUrls: ['./operationmenu.component.css'],
})
export class OperationmenuComponent implements OnInit {
  modalRef: BsModalRef;
  rowData: Profile = {
    id: 0,
    name: '',
    surname: '',
    birthDate: '',
    phone: '',
    city: '',
    street: '',
    number: 0,
  };

  constructor(private modalService: BsModalService) {}

  ngOnInit() {}

  openModal() {
    const initialState = {
      title: 'Add Data',
      rowData: this.rowData,
    };
    this.modalRef = this.modalService.show(UserformComponent, {initialState});
  }
}
