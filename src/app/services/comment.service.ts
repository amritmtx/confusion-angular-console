import { Injectable } from '@angular/core';
import { Comment } from '../shared/comment';

import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';
import { ProcessHTTPMsgService } from './process-httpmsg.service';


@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient,
    private processHTTPMsgService: ProcessHTTPMsgService) { }

  getComments(dishId: String): Observable<any[]> {
    return this.http.get<any[]>(baseURL + 'comments?dish=' + dishId )
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  postComment(comment: any) {
    return this.http.post(baseURL + 'comments', comment)
    .pipe(catchError(this.processHTTPMsgService.handleError));
  }
}
