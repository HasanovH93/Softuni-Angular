import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { ITheme } from './interfaces/theme';
import { IPost } from './interfaces/post';

const apiURL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  loadThemes() {
    console.log(`${apiURL}/themes`)
    return this.httpClient.get<ITheme[]>(`${apiURL}/themes`)
    
  }
  

  loadPosts(limit?: number){
    return this.httpClient.get<IPost[]>(`${apiURL}/posts${limit ? `?limit=${limit}` : ``}`)
  }
}
