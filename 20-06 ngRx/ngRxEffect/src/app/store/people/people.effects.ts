import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';
@Injectable()
export class PeopleEffects {
  url = 'http://localhost:3000/people';
  loadData$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Person] load'),
      exhaustMap(() =>
        this.http.get(this.url).pipe(
          map((people) => ({ type: '[Person] loadSuccess', payload: people })),
          catchError((err) => of({ type: '[Person] loadFailed', payload: err }))
        )
      )
    )
  );

  addData$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Person] add'),
      exhaustMap(({ payload }) =>
        this.http.post(this.url, payload).pipe(
          map((people) => ({ type: '[Person] addSuccess', payload: people })),
          catchError((err) => of({ type: '[Person] addFailed', payload: err }))
        )
      )
    )
  );

  constructor(private actions$: Actions, private http: HttpClient) {}
}
