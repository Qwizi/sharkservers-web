/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Category_HZU } from './Category_HZU';
import type { Post_ZOD } from './Post_ZOD';
import type { Server_MCC } from './Server_MCC';
import type { Tag_EAW } from './Tag_EAW';
import type { User_NGM } from './User_NGM';

export type Thread_ZYE = {
    created_date?: string;
    updated_date?: string;
    id?: number;
    title: string;
    content: string;
    is_closed?: boolean;
    status?: string;
    category?: Category_HZU;
    author?: User_NGM;
    posts?: Array<Post_ZOD>;
    tags?: Array<Tag_EAW>;
    server?: Server_MCC;
};

