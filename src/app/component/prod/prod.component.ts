import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-prod',
  templateUrl: './prod.component.html',
  styleUrls: ['./prod.component.css']
})
export class ProdComponent implements OnInit {
  public info:any[]=[]
  catId:any;
  constructor(private ob:DataService,private activated_router:ActivatedRoute) {
    this.catId=this.activated_router.snapshot.paramMap.get('catId')
    this.ob.getpro(this.catId).subscribe((res:any)=>{
      this.info=res.data
    })
   }

  ngOnInit(): void {
  }

}
