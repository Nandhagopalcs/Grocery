import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  public info:any[]=[]
  catId:any;

  constructor(private ob:DataService ,private activatedrouter:ActivatedRoute) { 
    this.catId=this.activatedrouter.snapshot.paramMap.get('catId')
    this.ob.getCategory().subscribe((res:any)=>{
      this.info=res.data
    })
  
  }

  ngOnInit(): void {
  }



}
