/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Ban_UDH } from './Ban_UDH';
import type { Role_LQM } from './Role_LQM';

export type User_LVF = {
    created_date?: string;
    updated_date?: string;
    id?: number;
    username: string;
    is_activated?: boolean;
    is_superuser?: boolean;
    avatar?: string;
    roles?: Array<Role_LQM>;
    display_role?: Role_LQM;
    banned_user?: Array<Ban_UDH>;
    banned_by?: Array<Ban_UDH>;
};

