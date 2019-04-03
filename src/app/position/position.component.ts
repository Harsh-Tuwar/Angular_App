import { Component, OnInit } from '@angular/core';
import { PositionService } from '../position.service';
import { ActivatedRoute } from '@angular/router';
import { Position } from '../data/Positions';

@Component({
  selector: 'app-position',
  templateUrl: './position.component.html',
  styleUrls: ['./position.component.css']
})
export class PositionComponent implements OnInit {

  public paramSubscription: any;
  public positionSubscription: any;
  public savePositionSubscription: any;
  public position: Position;
  public successMessage = false;
  public failMessage = false;
  public id: string;

  constructor(private positionService: PositionService, private route: ActivatedRoute) { 
    
  }


  ngOnInit() {
    this.position =  new Position();
    // console.log("inside position ts ngOnInit");
    this.paramSubscription = this.route.params.subscribe(params => this.id = params['_id'], err => console.log("unable to get id parameter"));
    this.positionSubscription = this.positionService.getPosition(this.id).subscribe(position => this.position = position[0], err => console.log("unable to get position"));
  }

  onSubmit() {
    this.savePositionSubscription = this.positionService.savePosition(this.position).subscribe(() => {
      this.successMessage = true;

      setTimeout(() => {
        this.successMessage = false;
      }, 2500);
    },
      () => {
        this.failMessage = true;
        setTimeout(() => {
          this.failMessage = false;
        }, 2500);
      });
  }

  ngOnSubmit(){
    this.savePositionSubscription = this.positionService.savePosition(this.position).subscribe(() => {
      this.successMessage = true;
      setTimeout(() => {
        this.successMessage = false;
      }, 2500);
    },
      () => {
        this.failMessage = true;
        setTimeout(() => {
          this.failMessage = false;
        }, 2500);
      });
  }

  ngOnDestroy(){
    if( this.savePositionSubscription ) { this.savePositionSubscription.unsubscribe(); }
    if( this.paramSubscription ) { this.paramSubscription.unsubscribe(); }
    if( this.positionSubscription ) { this.positionSubscription.unsubscribe(); }
  }


}
