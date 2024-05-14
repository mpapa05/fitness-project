import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Exercise } from '../../interfaces/exercise';

@Injectable({
  providedIn: 'root'
})
export class TrainingService {

  constructor(
    private http: HttpClient
  ) { }

  getAllExercises(): Observable<Exercise[]> {
    return this.http.get<Exercise[]>('http://localhost:8888/api/exercises');
  }

  getExercise(id: number) {
    return this.http.get(`http://localhost:8888/api/exercise/${id}`);
  }

  addExercise(exercise: any) {
    return this.http.post('http://localhost:8888/api/exercise/add', exercise);
  }

  updateExercise(exercise: any) {
    return this.http.put('http://localhost:8888/api/exercise/update', exercise);
  }

  deleteExercise(id: number) {
    return this.http.delete(`http://localhost:8888/api/exercise/${id}`);
  }
}
