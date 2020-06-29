import { TerrainSlot } from './terrain-slot'

export interface Board {
  size: number;
  slots: TerrainSlot[][];
}
