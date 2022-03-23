import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
    modalRef?: BsModalRef;
    confirm(idItem: any) {
            idItem.isPayed = true;}
    ngOnInit(): void {
        
    }
    
}