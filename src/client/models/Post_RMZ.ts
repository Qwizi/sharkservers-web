/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Like_SNV } from './Like_SNV';
import type { User_TBH } from './User_TBH';

export type Post_RMZ = {
    created_date?: string;
    updated_date?: string;
    id?: number;
    author?: User_TBH;
    content: string;
    likes?: Array<Like_SNV>;
};

