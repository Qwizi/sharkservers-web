/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Player_VBN } from './Player_VBN';
import type { PlayerStats_UAZ } from './PlayerStats_UAZ';

export type ServerPlayerStats_CDY = {
    created_date?: string;
    updated_date?: string;
    id?: number;
    player?: Player_VBN;
    stats?: Array<PlayerStats_UAZ>;
    points?: number;
};

