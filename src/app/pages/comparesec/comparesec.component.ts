import { Component, OnInit , OnDestroy } from '@angular/core'; // <<-- dont forget to import Destory
import { ActivatedRoute } from '@angular/router';
import { ProductDataService } from '../product-data.service';

@Component({
  selector: 'app-comparesec',
  templateUrl: './comparesec.component.html',
  styleUrls: ['./comparesec.component.css']
})
export class ComparesecComponent implements OnInit, OnDestroy  { // <<-- dont forget implement destory
  data;
  sub;
  
  constructor(private route:ActivatedRoute,private Data:ProductDataService) {
    // let id = this.route.snapshot.paramMap.get("id");
    // this.data = this.Data.getEach(id);
  }

  ngOnInit(): void {
    this.sub = this.route.paramMap.subscribe( params=>{
      var id = params.get("id");
      this.data = this.Data.getEach(id);
    });
  }
  
  ngOnDestroy(){
    this.sub.unsubscribe();
  }
}
