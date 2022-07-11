import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-span-conflict-test',
  templateUrl: './span-conflict-test.component.html',
  styleUrls: ['./span-conflict-test.component.scss']
})
export class SpanConflictTestComponent implements OnInit {

  public value: Date = new Date();
  public format = "MM/dd/yyyy h:mm a";

  constructor() { }

  ngOnInit(): void {
  }

}
