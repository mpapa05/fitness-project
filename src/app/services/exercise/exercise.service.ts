import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ExerciseService {
  readonly APIUrl = "http://localhost:3000/fitness/";
  constructor(private http: HttpClient) { }

  getExercises() {
    return this.http.get(this.APIUrl + '/exercises');
  }

  getTest() {
    console.log('test');
    const test = this.http.get(this.APIUrl);
    console.log(test);
    return this.http.get(this.APIUrl);
  }
}
