import {Component, OnInit, TemplateRef} from '@angular/core';
import {BsModalService} from 'ngx-bootstrap/modal';
import {BsModalRef} from 'ngx-bootstrap/modal/bs-modal-ref.service';
import {UserformComponent} from '../userform/userform.component';

@Component({
  selector: 'app-operationmenu',
  templateUrl: './operationmenu.component.html',
  styleUrls: ['./operationmenu.component.css'],
})
export class OperationmenuComponent implements OnInit {
  modalRef: BsModalRef;

  constructor(private modalService: BsModalService) {}

  ngOnInit() {}

  openModal() {
    const initialState = {
      title: 'Add Data',
    };
    this.modalRef = this.modalService.show(UserformComponent, {initialState});
  }
}
