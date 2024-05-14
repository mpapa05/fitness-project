import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./components/home/home.component').then(m => m.HomeComponent),
    },
    {
        path: 'diary',
        loadComponent: () => import('./components/diary/diary.component').then(m => m.DiaryComponent),
    },
    {
        path: 'training',
        loadComponent: () => import('./components/training/training.component').then(m => m.TrainingComponent),
    },
    {
        path: 'trainings',
        loadComponent: () => import('./components/trainings/trainings.component').then(m => m.TrainingsComponent),
    },
    {
        path: 'exercise',
        loadComponent: () => import('./components/exercise/exercise.component').then(m => m.ExerciseComponent),
    },
    {
        path: 'exercises',
        loadComponent: () => import('./components/exercises/exercises.component').then(m => m.ExercisesComponent),
    }
];
