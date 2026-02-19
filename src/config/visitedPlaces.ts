/**
 * Visited places configuration
 * Add or remove places here — they will appear as red dots on the globe.
 * coords: [longitude, latitude]
 */
export interface VisitedPlace {
  name: string;
  coords: [number, number];
}

export const visitedPlaces: VisitedPlace[] = [
  { name: "北京",            coords: [116.40,  39.90] },
  { name: "上海",            coords: [121.47,  31.23] },
  { name: "重庆",            coords: [106.55,  29.56] },
  { name: "香港",            coords: [114.17,  22.28] },
  { name: "成都",            coords: [104.06,  30.67] },
  { name: "臺北",            coords: [121.50,  25.03] },
  { name: "서울",            coords: [126.97,  37.56] },
  { name: "東京",            coords: [139.69,  35.68] },
  { name: "กรุงเทพฯ",         coords: [100.50,  13.75] },
  { name: "Singapore",       coords: [103.82,   1.35] },
  { name: "Bali",            coords: [115.18,  -8.40] },
  { name: "Екатеринбург",    coords: [ 60.61,  56.84] },
  { name: "New York",        coords: [-74.00,  40.71] },
  { name: "Albany",          coords: [-73.75,  42.65] },
  { name: "Los Angeles",     coords: [-118.24, 34.05] },
  { name: "San Francisco",   coords: [-122.41, 37.77] },
  { name: "Seattle",         coords: [-122.33, 47.60] },
  { name: "Vancouver",       coords: [-123.12, 49.28] },
  { name: "Pennsylvania",    coords: [-80.09,  42.12] }, 
  { name: "Ohio",            coords: [-82.90,  40.41] }, 
  { name: "Indiana",         coords: [-86.13,  40.26] }, 
  { name: "Illinois",        coords: [-89.39,  40.63] }, 
  { name: "Wisconsin",       coords: [-89.61,  44.50] },
  { name: "Minnesota",       coords: [-94.68,  46.72] }, 
  { name: "South Dakota",    coords: [-100.35, 44.36] }, 
  { name: "Wyoming",         coords: [-107.29, 43.07] }, 
  { name: "Montana",         coords: [-110.36, 46.87] }, 
  { name: "Idaho",           coords: [-114.74, 44.06] }  
];
