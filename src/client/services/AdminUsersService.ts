/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BanUserSchema } from '../models/BanUserSchema';
import type { CreateUserSchema } from '../models/CreateUserSchema';
import type { Page_User_BGZ_ } from '../models/Page_User_BGZ_';
import type { User_BGZ } from '../models/User_BGZ';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class AdminUsersService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Admin Get Users
     * Admin get all users
     * :param params:
     * :param user:
     * :return Page[UserOutWithEmail]:
     * @param page
     * @param size
     * @returns Page_User_BGZ_ Successful Response
     * @throws ApiError
     */
    public adminUsersAdminGetUsers(
        page: number = 1,
        size: number = 50,
    ): CancelablePromise<Page_User_BGZ_> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/admin/users',
            query: {
                'page': page,
                'size': size,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Admin Create User
     * Admin create user
     * :param user_data:
     * :param user:
     * :return UserOutWithEmail:
     * @param requestBody
     * @returns User_BGZ Successful Response
     * @throws ApiError
     */
    public adminUsersAdminCreateUser(
        requestBody: CreateUserSchema,
    ): CancelablePromise<User_BGZ> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/admin/users',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Admin Get User
     * Admin get user
     * :param user_id:
     * :param user:
     * :return UserOutWithEmail:
     * @param userId
     * @returns User_BGZ Successful Response
     * @throws ApiError
     */
    public adminUsersAdminGetUser(
        userId: number,
    ): CancelablePromise<User_BGZ> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/admin/users/{user_id}',
            path: {
                'user_id': userId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Admin Delete User
     * Admin delete user
     * :param user_id:
     * :param user:
     * :return dict:
     * @param userId
     * @returns any Successful Response
     * @throws ApiError
     */
    public adminUsersAdminDeleteUser(
        userId: number,
    ): CancelablePromise<Record<string, any>> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/admin/users/{user_id}',
            path: {
                'user_id': userId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Admin Ban User
     * Admin ban user
     * :param ban_data:
     * :param ban_service:
     * :param user:
     * :return dict:
     * @param userId
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public adminUsersAdminBanUser(
        userId: number,
        requestBody: BanUserSchema,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/admin/users/{user_id}/ban',
            path: {
                'user_id': userId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Admin Unban User
     * Admin unban user
     * :param ban_service:
     * :param user:
     * :return dict:
     * @param userId
     * @returns any Successful Response
     * @throws ApiError
     */
    public adminUsersAdminUnbanUser(
        userId: number,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/admin/users/{user_id}/unban',
            path: {
                'user_id': userId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

}
