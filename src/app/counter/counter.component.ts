import { Component, OnInit, Input } from '@angular/core';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  @Input() enddate: string;

  private _diff: number;
  private _months: number;
  private _days: number;
  private _hours: number;
  private _minutes: number;
  private _seconds: number;

  constructor() {}

  ngOnInit() {
    interval(1000)
      .pipe(
        map(x => {
          this._diff =
            Date.parse(this.enddate) - Date.parse(new Date().toString());
        })
      )
      .subscribe(x => {
        this._months = this.getMonths(this._diff);
        this._days = this.getDays(this._diff);
        this._hours = this.getHours(this._diff);
        this._minutes = this.getMinutes(this._diff);
        this._seconds = this.getSeconds(this._diff);
      });
  }

  getMonths(t) {
    return Math.floor(t / (1000 * 60 * 60 * 24 * 30));
  }

  getDays(t) {
    return Math.floor((t / (1000 * 60 * 60 * 24)) % 30);
  }

  getHours(t) {
    return Math.floor((t / (1000 * 60 * 60)) % 24);
  }

  getMinutes(t) {
    return Math.floor((t / 1000 / 60) % 60);
  }

  getSeconds(t) {
    return Math.floor((t / 1000) % 60);
  }
}
