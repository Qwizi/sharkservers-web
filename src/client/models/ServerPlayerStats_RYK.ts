/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Player_ZXQ } from './Player_ZXQ';
import type { PlayerStats_DPU } from './PlayerStats_DPU';

export type ServerPlayerStats_RYK = {
    created_date?: string;
    updated_date?: string;
    id?: number;
    player?: Player_ZXQ;
    stats?: Array<PlayerStats_DPU>;
    points?: number;
};

