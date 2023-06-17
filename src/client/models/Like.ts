/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PkOnlyUserwzxgmm } from './PkOnlyUserwzxgmm';
import type { User } from './User';

/**
 * Like
 */
export type Like = {
    id?: number;
    user?: (number | User | PkOnlyUserwzxgmm);
    created_date?: string;
    updated_date?: string;
};

