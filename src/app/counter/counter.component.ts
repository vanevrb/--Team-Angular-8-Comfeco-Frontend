import { Component, OnDestroy, OnInit } from '@angular/core';
import { Interval, DateTime } from 'luxon';
import { Counter } from './models/Counter';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent implements OnInit, OnDestroy {
  targetTime: DateTime;
  interval: Interval;
  counter: Counter;
  idInterval: any;

  get days() {
    const str = this.counter.days.toString();
    const digits = str.length > 1 ? str : `0${str}`;

    return digits.split('');
  }
  get hours() {
    const str = this.counter.hours.toString();
    const digits = str.length > 1 ? str : `0${str}`;

    return digits.split('');
  }
  get minutes() {
    const str = this.counter.minutes.toString();
    const digits = str.length > 1 ? str : `0${str}`;

    return digits.split('');
  }
  get seconds() {
    const str = this.counter.seconds.toFixed(0).toString();
    const digits = str.length > 1 ? str : `0${str}`;
    const scds = digits === '60' ? '00' : digits;

    return scds.split('');
  }

  constructor() {
    this.counter = this.calculateNow();
  }

  ngOnInit(): void {
    this.idInterval = setInterval(() => {
      this.counter = this.calculateNow();
    }, 1000);
  }
  ngOnDestroy() {
    clearInterval(this.idInterval);
  }

  calculateNow() {
    this.targetTime = DateTime.local(2022, 1, 1);
    const now = DateTime.now();
    return Interval.fromDateTimes(now, this.targetTime)
      .toDuration(['days', 'hours', 'minutes', 'seconds'])
      .toObject();
  }
}
