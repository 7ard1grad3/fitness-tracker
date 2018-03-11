import { StopTrainingComponent } from './stop-training.component';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.css']
})
export class CurrentTrainingComponent implements OnInit {
  @Output() trainingExit = new EventEmitter();
  progress = 0;
  time: number;
  constructor( private _dialog: MatDialog) { }

  ngOnInit() {
    this.startOrResumeTimer();
  }

  onStop() {
    clearInterval(this.time);
    const dialogRef = this._dialog.open(StopTrainingComponent, {data: {
      progress: this.progress
    }});
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.trainingExit.emit();
      } else {
        this.startOrResumeTimer();
      }
    });
  }

  startOrResumeTimer() {
    this.time = setInterval(() => {
      this.progress = this.progress + 5;
      if (this.progress >= 100) {
        clearInterval(this.time);
      }
    }, 1000);
  }

}
