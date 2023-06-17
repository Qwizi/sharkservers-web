/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Like } from './Like';
import type { PkOnlyUserqkehow } from './PkOnlyUserqkehow';
import type { User } from './User';

/**
 * Post
 */
export type Post = {
    id?: number;
    author?: (number | User | PkOnlyUserqkehow);
    content: string;
    likes?: (number | Like | Array<Like>);
    created_date?: string;
    updated_date?: string;
};

