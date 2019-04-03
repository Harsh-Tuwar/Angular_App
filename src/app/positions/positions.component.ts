import { Component, OnInit, OnDestroy } from '@angular/core';
import { Position } from '../data/Positions';
import { PositionService } from '../position.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-positions',
  templateUrl: './positions.component.html',
  styleUrls: ['./positions.component.css']
})
export class PositionsComponent implements OnInit {

 positions: Position[] =[];
 getPositionSub:any ;
 loadingError: boolean = false;

  constructor(private ps: PositionService, private router: Router) {
   
  }

  ngOnInit() {
    // console.log("insed ngOnInit");
    this.getPositionSub = this.ps.getPositions()
      .subscribe(
        positions => this.positions = positions,
        function (e) { this.loadingError = true; }
      );
  }

  routePosition(id: string){
    this.router.navigate(['/position', id]);
    // console.log("tr clicked");
  }


  ngOnDestroy() {
    if(this.getPositionSub) {this.getPositionSub.unsubscribe()};
  }

}
