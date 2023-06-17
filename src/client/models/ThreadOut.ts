/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ThreadAuthor } from './ThreadAuthor';
import type { ThreadCategory } from './ThreadCategory';
import type { ThreadTag } from './ThreadTag';

export type ThreadOut = {
    id: number;
    title: string;
    is_closed: boolean;
    content: string;
    category: ThreadCategory;
    author: ThreadAuthor;
    tags?: Array<ThreadTag>;
};

