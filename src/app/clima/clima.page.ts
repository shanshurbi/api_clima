import { Component, OnInit } from '@angular/core';
import { ServClimaService } from 'src/services/serv-clima.service';

@Component({
  selector: 'app-clima',
  templateUrl: './clima.page.html',
  styleUrls: ['./clima.page.scss'],
  standalone: false,
})
export class ClimaPage implements OnInit {
  city: string = '';  // Ahora empieza vacío
  weatherData: any = null;
  cityConsulted: boolean = false;  // Para saber si ya se buscó

  constructor(private servclimaService: ServClimaService) {}

  ngOnInit(): void {
    // Ya NO buscamos automáticamente
  }

  // Método que llamamos cuando el usuario presiona el botón
  getWeatherData(): void {
    if (!this.city.trim()) {
      return;  // No hacer nada si no escribieron ciudad
    }

    this.servclimaService.getWeather(this.city).subscribe(
      (data) => {
        console.log('Datos recibidos:', data);
        this.weatherData = data;
        this.cityConsulted = true;
      },
      (error) => {
        console.error('Error al obtener los datos del clima', error);
        this.weatherData = null;
        this.cityConsulted = true;
      }
    );
  }
}
