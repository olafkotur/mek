export interface ICoords {
  lat: number;
  long: number;
}

export interface ICoordsWithName extends ICoords {
  name: string;
}
