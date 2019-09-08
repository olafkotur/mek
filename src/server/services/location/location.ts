import { ICoords } from '../../models/location';
import { config } from '../../../config';

export const LocationService = {
  getCurrentLocation: async (): Promise<ICoords> => {
    const position: any = await new Promise((resolve: any, reject: any) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
    return { lat: position.coords.latitude, long: position.coords.longitude };
  },

  // DANGER: Connected to Google billing
  getCoordsDetails: async (coords: ICoords): Promise<any> => {
    const url: string = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${coords.lat},${coords.long}&key=${config.google.apiKey}`;
    const data = await fetch(url).then((d: any) => {
      return d.json();
    });
    return data;
  },

  calculateSimpleDistance: (start: ICoords, end: ICoords) => {
    const degToRad = (deg: number) => deg * Math.PI / 180;

    const earthRadius = 6371;
    const dLat = degToRad(end.lat - start.lat);
    const dLon = degToRad(end.long - start.long);

    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(degToRad(start.lat)) * Math.cos(degToRad(end.lat)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2)
    ;
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = earthRadius * c;

    return d;
  },
};
