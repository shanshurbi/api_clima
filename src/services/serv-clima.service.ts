import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServClimaService {
  private apiKey = 'a1ca930c493a4175aba204755252604';  
  private apiUrl = 'https://api.weatherapi.com/v1/current.json'; 

  constructor(private http: HttpClient) { }

  // Método para obtener el clima por ciudad
  getWeather(city: string): Observable<any> {
    const url = `${this.apiUrl}?key=${this.apiKey}&q=${city}&lang=es`;
    return this.http.get<any>(url);
  }
}
