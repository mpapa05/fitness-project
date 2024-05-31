import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ExerciseService } from '../../services/exercise/exercise.service';
import { CommonModule } from '@angular/common';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { Exercise } from '../../interfaces/exercise';

@Component({
  selector: 'app-exercises',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatButtonModule, MatIconModule],
  templateUrl: './exercises.component.html',
  animations: [
    trigger('detailExpand', [
      state('collapsed,void', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
  styleUrl: './exercises.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExercisesComponent {
  exerciseService = inject(ExerciseService);
  dataSource: Exercise[] = [];
  columnsToDisplay = ['name', 'description', 'video', 'status'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement!: Exercise | null;
  constructor() { }


  ngOnInit() {
    this.exerciseService.getExercises().subscribe((data: any) => {
      console.log(data);
      this.dataSource = data;
    });
    
    console.log('ExercisesComponent');
  }
}
