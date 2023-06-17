/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Post_RMZ } from './Post_RMZ';
import type { Server_MKR } from './Server_MKR';
import type { Tag_LMM } from './Tag_LMM';
import type { User_TBH } from './User_TBH';

export type Thread_XVN = {
    created_date?: string;
    updated_date?: string;
    id?: number;
    title: string;
    content: string;
    is_closed?: boolean;
    status?: string;
    author?: User_TBH;
    posts?: Array<Post_RMZ>;
    tags?: Array<Tag_LMM>;
    server?: Server_MKR;
};

