/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { App_YKY } from './App_YKY';
import type { Ban_RRH } from './Ban_RRH';
import type { Player_VBN } from './Player_VBN';
import type { Role_NNA } from './Role_NNA';

export type User_TBH = {
    created_date?: string;
    updated_date?: string;
    id?: number;
    username: string;
    email: string;
    password: string;
    is_activated?: boolean;
    is_superuser?: boolean;
    avatar?: string;
    roles?: Array<Role_NNA>;
    display_role?: Role_NNA;
    last_login?: string;
    secret_salt: string;
    banned_user?: Array<Ban_RRH>;
    banned_by?: Array<Ban_RRH>;
    apps?: Array<App_YKY>;
    players?: Array<Player_VBN>;
};

