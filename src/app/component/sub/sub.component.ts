import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-sub',
  templateUrl: './sub.component.html',
  styleUrls: ['./sub.component.css']
})
export class SubComponent implements OnInit {

  public info:any[]=[]
  catId:any
  constructor(private ob:DataService,private activatedrouter :ActivatedRoute) {
    this.catId=this.activatedrouter.snapshot.paramMap.get('catId')
    this.ob.getsub(this.catId).subscribe((react:any)=>{
      this.info=react.data
    })
   }

  ngOnInit(): void {
  }

}
