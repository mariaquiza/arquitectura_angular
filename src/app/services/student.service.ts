import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const baseUrl = '/api/students';

@Injectable({
  providedIn: 'root'
})
export class StudentService {


  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    return this.http.get(baseUrl);
  }

  get(id): Observable<any> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id, data): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByNameContaining(name): Observable<any> {
    return this.http.get(`${baseUrl}?name=${name}`);
  }
}
