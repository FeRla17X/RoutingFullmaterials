import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {
  Data = [
    {id:"#01",name:"giorgi",age:"4",hoby:"football"},
    {id:"#07",name:"nika",age:"13",hoby:"footjob"},
    {id:"#03",name:"nini",age:"12",hoby:"mamastan incesti"},
    {id:"#02",name:"dato",age:"15",hoby:"hobi ara chemi yle"},
    {id:"#08",name:"xamanwka",age:"23213",hoby:"yofna"},
    {id:"#04",name:"mari",age:"7",hoby:"tvinis tyvna"},
    {id:"#06",name:"lamara",age:"65",hoby:"pensiaze siaruli"},
    {id:"#05",name:"bozi bozi",age:"13",hoby:"coliani kacebi"}
  ];
  
  constructor() { }
  getAll(){
    return this.Data;
  }
  
  getEach(id){
    for (let i = 0; i < this.Data.length; i++) {
      if(this.Data[i].id == id)
        return this.Data[i];
    }
  }
  
  getByName(name){
    for (let i = 0; i < this.Data.length; i++) {
      if(this.Data[i].name == name)
        return this.Data;
    }
  }
  
  getQuant(){
    return this.Data.length;
  }
  
  OrderByAge(){}
  OrderById(){}
}
