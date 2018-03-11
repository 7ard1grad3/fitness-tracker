import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-name',
  template: `<h1 mat-dialog-title>Are you sure?</h1>
  <mat-dialog-content>
  <p>You already got {{ dataFromComponent.progress }}%</p>
</mat-dialog-content>
  <mat-dialog-actions>
    <button mat-button [mat-dialog-close]="true"> Yes </button>
    <button mat-button [mat-dialog-close]="false"> No </button>
  </mat-dialog-actions>
  `
})
export class StopTrainingComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public dataFromComponent: any) { }

  ngOnInit() { }
}
