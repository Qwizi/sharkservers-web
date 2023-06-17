/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CreateRoleSchema = {
    name: string;
    color: string;
    is_staff?: boolean;
    scopes?: Array<number>;
};

