import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Note } from '../note.model';

@Injectable({
  providedIn: 'root'
})
export class HttpNotService {
  routeApi = 'http://localhost:3000/notes'
  notesLength: number;
  constructor(private http: HttpClient) { }

  getNotes() : Promise<any>
  {
    return this.http.get(this.routeApi).toPromise();
  }

  deleteNote(id: number) : Promise<any>
  {
    return this.http.delete(this.routeApi + "/" + id).toPromise();
  }

  postNote(data: Note) : Promise<any>
  {
    return this.http.post(this.routeApi, data).toPromise();
  }

}
