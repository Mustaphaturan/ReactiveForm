import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class ApiService {
  path = environment.apiUrl;
  constructor(private http: HttpClient) { }
  postProduct(data: any) {
    return this.http.post<any>(this.path + "posts", data);
  }
  getProduct() {
    return this.http.get<any>(this.path + "posts");
  }
  putProduct(data: any, id: number) {
    return this.http.put<any>(this.path + "posts/" + id, data);
  }
  deleteProduct(id: number) {
    return this.http.delete<any>(this.path + "posts/" + id);
  }
}
