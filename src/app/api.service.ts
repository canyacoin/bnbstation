import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';

import { Observable, of } from  'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

export  interface  Item{
name:  string;
description:  string;
url:  string;
html:  string;
markdown:  string;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private  dataURL:  string  =  "https://www.techiediaries.com/api/data.json";

  constructor(private  httpClient:  HttpClient) {}


  fetch():  Observable<Item[]> {
  return this.httpClient.get<Item[]>(this.dataURL)
  .pipe(
    tap(_ => this.log('fetched items')),
    catchError(this.handleError<Item[]>('getItems', []))
    );;
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}

private log(message: string) {
  console.log(message);
}

}
