/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CreateUserSchema = {
    username: string;
    email: string;
    password: string;
    display_role?: number;
    roles?: Array<number>;
    is_activated?: boolean;
};

