/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PkOnlyRoleviyclu } from './PkOnlyRoleviyclu';
import type { Role } from './Role';

/**
 * User
 */
export type User = {
    id?: number;
    username: string;
    email: string;
    password: string;
    is_activated?: boolean;
    is_superuser?: boolean;
    avatar?: string;
    roles?: (number | Role | Array<Role>);
    display_role?: (number | Role | PkOnlyRoleviyclu);
    last_login?: string;
    secret_salt: string;
    created_date?: string;
    updated_date?: string;
};

