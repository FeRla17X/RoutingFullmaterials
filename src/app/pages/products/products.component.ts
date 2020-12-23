import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
import { ProductDataService } from '../product-data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  items;
  
  constructor(private route:ActivatedRoute,private router:Router,
              private Items:ProductDataService) { 
                this.items = this.Items.getAll();
  }
  
  first(param){ this.router.navigate(["comparefirst",param],{relativeTo:this.route}); }
  sec(param){ this.router.navigate(["comparesec",param],{relativeTo:this.route}); }
  
  ngOnInit(): void {}

}
