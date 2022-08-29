import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent implements OnInit {
  
  id:any
  product:any

  constructor(private ob:DataService,private activatedrouter: ActivatedRoute ) {
    this.id=this.activatedrouter.snapshot.paramMap.get('id')
    this.ob.getsp(this.id).subscribe((res:any)=>{
      this.product=res.data
    })
   }

  ngOnInit(): void {
  }

}
