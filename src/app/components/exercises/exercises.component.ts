import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ExerciseService } from '../../services/exercise/exercise.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-exercises',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './exercises.component.html',
  styleUrl: './exercises.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExercisesComponent {
  exerciseService = inject(ExerciseService);
  constructor() { }


  ngOnInit() {
    this.exerciseService.getTest().subscribe((data: any) => {
      console.log(data);
    });
    
    console.log('ExercisesComponent');
  }
}
