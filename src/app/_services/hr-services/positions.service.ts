import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError, map } from 'rxjs';
import { CommonsService } from '../commons.service';

@Injectable({
  providedIn: 'root',
})
export class PositionsService {
  constructor(
    private http: HttpClient,
    private commonService: CommonsService
  ) {}

  getAllPositions() {
    const url = environment.getPositions;
    return this.http.get(url).pipe(
      catchError((error) => {
        return this.commonService.catchError(error);
      }),
      map((response: any) => {
        return response;
      })
    );
  }
}
