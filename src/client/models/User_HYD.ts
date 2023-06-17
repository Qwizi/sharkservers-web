/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Player_ZXQ } from './Player_ZXQ';
import type { Role_LQM } from './Role_LQM';

export type User_HYD = {
    created_date?: string;
    updated_date?: string;
    id?: number;
    username: string;
    is_activated?: boolean;
    is_superuser?: boolean;
    avatar?: string;
    display_role?: Role_LQM;
    players?: Array<Player_ZXQ>;
};

