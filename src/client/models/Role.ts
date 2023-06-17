/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Scope } from './Scope';

/**
 * Role
 */
export type Role = {
    id?: number;
    name: string;
    color?: string;
    scopes?: (number | Scope | Array<Scope>);
    is_staff?: boolean;
};

