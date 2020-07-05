import { Terrain } from './terrain';

export interface TerrainSlot {
  position: { x: number; y: number }
  terrain: Terrain;
  canBeTerrain: boolean;
  irrigations: boolean[];
}
