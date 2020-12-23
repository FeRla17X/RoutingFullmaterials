import { Component, OnInit , OnDestroy} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductDataService } from '../product-data.service';

@Component({
  selector: 'app-comparefirst',
  templateUrl: './comparefirst.component.html',
  styleUrls: ['./comparefirst.component.css']
})
export class ComparefirstComponent implements OnInit , OnDestroy{
  data;
  sub;
  
  constructor(private route:ActivatedRoute,private Data:ProductDataService) {
    let id = this.route.snapshot.paramMap.get("id");
    this.data = this.Data.getEach(id);
  }

  ngOnInit(): void {
    // this.sub = this.route.paramMap.subscribe(params =>{
    //   let id = params.get("id");
    //   this.data = this.Data.getEach(id);
    // });
  }
  ngOnDestroy(){
    // this.sub.unsubscribe();
  }

}
