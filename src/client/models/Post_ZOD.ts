/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Like_ZTL } from './Like_ZTL';
import type { User_CGQ } from './User_CGQ';

export type Post_ZOD = {
    created_date?: string;
    updated_date?: string;
    id?: number;
    author?: User_CGQ;
    content: string;
    likes?: Array<Like_ZTL>;
};

