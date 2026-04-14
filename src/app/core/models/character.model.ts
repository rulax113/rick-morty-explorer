export interface Character {
    id: number;
    name: string;
    description: string;
    series: string;
    status: 'active' | 'retired' | 'deceased';
    power: number;       // 1-10
    imageUrl: string;
    tags: string[];
    createdAt: Date;
    updatedAt: Date;
  }
  
  export type CharacterStatus = Character['status'];
  
  export const STATUS_LABELS: Record<CharacterStatus, string> = {
    active: 'Aktywny',
    retired: 'Na emeryturze',
    deceased: 'Poległy'
  };