/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CategoryTypeEnum } from './CategoryTypeEnum';

export type CreateCategorySchema = {
    name: string;
    description?: string;
    type?: CategoryTypeEnum;
};

