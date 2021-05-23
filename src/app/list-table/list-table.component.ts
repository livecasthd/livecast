import { core } from '@angular/compiler';
import { cou } from '../course.services';
import { Component } from '@angular/core';

@Component({
  selector: 'list-table',
  templateUrl: './list-table.component.html',
  styleUrls: ['./list-table.component.css']
})
export class ListTableComponent{

  constructor(ca:cou ){ 
    this.courses = ca.cu(); 
}    
isActive;
title = 'MarkApp';
title1 = 'orederlist';
courses;
colspan = 2;

saveOn($event){

      this.isActive = !this.isActive
    }
}
