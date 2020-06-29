export interface Terrain {
  isFountain: boolean;
  color: 'green' | 'pink' | 'yellow';
  bamboos: number;
  improvement: 'enclosure' | 'watershed' | 'fertilizer';
}
