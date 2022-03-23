import { Component, OnInit } from '@angular/core';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  p: number = 1;
  date:any;
  constructor() { }
  datvalid:any[] = [{id:1,nom: 'test 1', date:'15-02-2021'},{id:1,nom: 'test 1', date:'11-10-2021'}
,{id:1,nom: 'test 1', date:'15-02-2021'},{id:1,nom: 'test 1', date:'01-01-2011'},{id:1,nom: 'test 1', date:'15-02-2021'}
, {id:2, nom:'test 2',isPayed:true},
     {id:3, nom:'test 3',isPayed:false}, {id:3, nom:'test 3',isPayed:false}, {id:3, nom:'test 4 ',isPayed:false}, {id:3, nom:'test 5',isPayed:false}
    , {id:3, nom:'test 6',isPayed:false}, {id:3, nom:'test7',isPayed:false}];
    


  ngOnInit(): void {
  }

}
