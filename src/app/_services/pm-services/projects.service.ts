import { Injectable } from '@angular/core';
import { CommonsService } from '../commons.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  constructor(
    private commonService: CommonsService,
    private http: HttpClient
  ) {}

  //--------------------------------------Projects------------------------------
  createProject(data: any) {
    const url = environment.createproject;
    return this.http.post(url, data).pipe(
      catchError((error) => {
        return this.commonService.catchError(error);
      }),
      map((response: any) => {
        return response;
      })
    );
  }
  getALlProjects(data: any) {
    const url = environment.getProjects;
    let urlParams = new HttpParams();
    urlParams = urlParams.append('skip', data.skip);
    urlParams = urlParams.append('limit', data.limit);
    urlParams = urlParams.append('search', data.search);
    return this.http.get(url, { params: urlParams }).pipe(
      catchError((error) => {
        return this.commonService.catchError(error);
      }),
      map((response: any) => {
        return response;
      })
    );
  }

  getProjectDataById(id: any) {
    const url = environment.getProjectDetailsById + id;
    return this.http.get(url).pipe(
      catchError((error) => {
        return this.commonService.catchError(error);
      }),
      map((response: any) => {
        return response;
      })
    );
  }

  updateProjectData(id: any, data: any) {
    const url = environment.updateProjectDetails + id;
    return this.http.put(url, data).pipe(
      catchError((error) => {
        return this.commonService.catchError(error);
      }),
      map((response: any) => {
        return response;
      })
    );
  }

  deleteProjectData(id: any) {
    const url = environment.deleteProjectDetails + id;
    return this.http.delete(url).pipe(
      catchError((error) => {
        return this.commonService.catchError(error);
      }),
      map((response: any) => {
        return response;
      })
    );
  }

  //--------------------------------------Members------------------------------
  getALlmembers(data: any) {
    const url = environment.getMembers + data.id + '/members';
    let urlParams = new HttpParams();
    urlParams = urlParams.append('skip', data.skip);
    urlParams = urlParams.append('limit', data.limit);
    urlParams = urlParams.append('search', data.search);
    return this.http.get(url, { params: urlParams }).pipe(
      catchError((error) => {
        return this.commonService.catchError(error);
      }),
      map((response: any) => {
        return response;
      })
    );
  }
}
