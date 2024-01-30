export interface Location {
  lat: string;
  long: string;
}
export const getLocation = (): Location | null => {
  if ("geolocation" in navigator) {
    let latitude= 0;
    let longitude= 0;
    navigator.geolocation.getCurrentPosition((position) => {
      latitude = position.coords.latitude;
      longitude = position.coords.longitude;
    });

    return {
      lat: latitude.toString(),
      long: longitude.toString(),
    };
  }

  return null;
};
