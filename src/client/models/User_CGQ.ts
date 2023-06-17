/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Ban_UDH } from './Ban_UDH';
import type { Player_ZXQ } from './Player_ZXQ';
import type { Role_LQM } from './Role_LQM';

export type User_CGQ = {
    created_date?: string;
    updated_date?: string;
    id?: number;
    username: string;
    email: string;
    password: string;
    is_activated?: boolean;
    is_superuser?: boolean;
    avatar?: string;
    roles?: Array<Role_LQM>;
    display_role?: Role_LQM;
    last_login?: string;
    secret_salt: string;
    banned_user?: Array<Ban_UDH>;
    banned_by?: Array<Ban_UDH>;
    players?: Array<Player_ZXQ>;
};

