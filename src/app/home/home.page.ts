import { Component } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  map!: L.Map;


  constructor() { }
  ngOnInit() { }

  ionViewDidEnter() {
    this.map = L.map('mapId').setView([-7.768938753815898, 110.37778430008716], 10)

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);

    const baseMaps = {
      'OpenStreetMap': L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }),

      'Stadia': L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
      }),

      'Light Grey': L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://carto.com/attributions">CARTO</a>'
      }),

      'Terain Layer': L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://opentopomap.org/copyright">OpenTopoMap</a>',

      }),
      'World Street Map': L.tileLayer(
        "https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}", {
        attribution:
          'Tiles &copy; Esri | <a href="Latihan WebGIS" target="_blank">DIVSIG UGM</a>',
      })
    };

    L.control.layers(baseMaps).addTo(this.map);

    // Menambahkan custom icon marker
    const customIcon = L.icon({
      iconUrl: 'assets/location2.png', // Path ke gambar icon di folder assets
      iconSize: [35, 35], // Ukuran icon [width, height]
      iconAnchor: [22, 38], // Posisi anchor icon
      popupAnchor: [-3, -38], // Posisi popup relatif terhadap icon
    });

    // Marker 1
    const marker1 = L.marker([-7.770212075099307, 110.37785355347518], { icon: customIcon }).addTo(this.map);
    marker1.bindPopup('Graha Saba Pramana').openPopup();

    // Marker 2

    const marker2 = L.marker([-7.781713136021527, 110.36705792417953], { icon: customIcon }).addTo(this.map);
    marker2.bindPopup(`
    <div>
     <div style="text-align: center;">
        <p>Monumen Tugu Jogja</p>
        <img src="assets/tugu.jpeg" alt="Tugu Jogja" style="width:100px; height:100x;">
    </div>
`).openPopup();


    // Marker 3
    const marker3 = L.marker([-7.77398833783402, 110.37453634219474], { icon: customIcon }).addTo(this.map);
    marker3.bindPopup('Sekolah Vokasi UGM').openPopup();

    // Marker 3
    const marker4 = L.marker([-7.791530036095878, 110.36574204482089], { icon: customIcon }).addTo(this.map);
    marker4.bindPopup('Malioboro Yogyakarta').openPopup();
  }
}
