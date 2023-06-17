/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { App_NBW } from './App_NBW';
import type { Ban_UDH } from './Ban_UDH';
import type { Player_ZXQ } from './Player_ZXQ';
import type { Role_OOO } from './Role_OOO';

export type User_NGM = {
    created_date?: string;
    updated_date?: string;
    id?: number;
    username: string;
    is_activated?: boolean;
    is_superuser?: boolean;
    avatar?: string;
    display_role?: Role_OOO;
    last_login?: string;
    banned_user?: Array<Ban_UDH>;
    banned_by?: Array<Ban_UDH>;
    apps?: Array<App_NBW>;
    players?: Array<Player_ZXQ>;
};

