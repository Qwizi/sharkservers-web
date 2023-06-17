/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Scope_HEM } from './Scope_HEM';
import type { User_CGQ } from './User_CGQ';

export type Role_CKD = {
    id?: number;
    name: string;
    color?: string;
    scopes?: Array<Scope_HEM>;
    is_staff?: boolean;
    user_roles?: Array<User_CGQ>;
    user_display_role?: Array<User_CGQ>;
};

