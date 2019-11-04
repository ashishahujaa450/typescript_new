export interface Mapable {
  markerContent(): string;
  location: {
    lat: number;
    lng: number;
  };
}

export class customMap {
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 1,
      center: { lat: 0, lng: 0 }
    });
  }

  addMarker(mapable: Mapable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mapable.location.lat,
        lng: mapable.location.lng
      }
    });

    marker.addListener('click', () => {
      let infoWindow = new google.maps.InfoWindow({
        content: mapable.markerContent()
      });

      infoWindow.open(this.googleMap, marker);
    });
  }
}
