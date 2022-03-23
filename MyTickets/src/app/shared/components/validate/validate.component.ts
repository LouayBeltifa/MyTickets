import { Component, ComponentFactoryResolver, Injectable, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-validate',
  templateUrl: './validate.component.html',
  styleUrls: ['./validate.component.scss'],})
  @Injectable({providedIn: 'root'})
export class ValidateComponent implements OnInit {
    

    users:any[] = [{id:1,nom: 'test 1', isPayed:true}
    , {id:2, nom:'test 2',isPayed:true},
     {id:3, nom:'test 3',isPayed:false}, {id:3, nom:'test 3',isPayed:false}, {id:3, nom:'test 4 ',isPayed:false}, {id:3, nom:'test 5',isPayed:false}
    , {id:3, nom:'test 6',isPayed:false}, {id:3, nom:'test7',isPayed:false}, {id:3, nom:'test 8',isPayed:false}, {id:3, nom:'test 9',isPayed:false}, {id:3, nom:'test 10',isPayed:false}, {id:3, nom:'test',isPayed:false}, {id:3, nom:'test',isPayed:false}, {id:3, nom:'test',isPayed:false},
    {id:3, nom:'test',isPayed:false}, {id:3, nom:'test',isPayed:false}, {id:2, nom:'test 12',isPayed:true}, {id:2, nom:'test 13',isPayed:true}];
    p: number = 1;
    term:any;
    modalRef?: BsModalRef;
    maxSize:number=5;
    config = {
      animated: true
    };

 /*constructor(private modalService: BsModalRef) { }
  
  openModal(compon: TemplateRef<any>,idItem: any) {
    idItem.isPayed = true;
    this.modalRef = this.modalService.show(SuccessModalComponent,{initialState});
  }*/
 


// noval=false;
//   confirm(idItem: any) {
//     idItem.isPayed = true;
//     this.noval = true;
//     this.modalRef?.hide();
    
//   }
//   @ViewChild('modalContainer', { read: ViewContainerRef })
//   modalContainer: ViewContainerRef;

  constructor(private resolver: ComponentFactoryResolver) {
  }

  ngOnInit() {
    // const factory = this.resolver.resolveComponentFactory(ModalComponent);

    // this.modalService.component$.subscribe(modal => {
    //   this.modalContainer.clear();
    //   const modalRef = this.modalContainer.createComponent(factory);
    //   modalRef.instance.component = modal;

    //   let sub: Subscription;
    //   const cleanUp = () => { this.modalContainer.clear(); sub.unsubscribe(); };
    //   sub = modalRef.instance.close.subscribe(cleanUp);
    //   modalRef.onDestroy(cleanUp);
    // });
  }
 

  openModal() {
    // this.modalService.openInModal(ModalComponent);
  }
}
