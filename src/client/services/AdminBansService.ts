/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class AdminBansService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Admin Get User Bans
     * Admin get user bans
     * :param user:
     * :return list[Ban]:
     * @param page
     * @param size
     * @returns any Successful Response
     * @throws ApiError
     */
    public adminBansAdminGetUserBans(
        page: number = 1,
        size: number = 50,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/admin/bans',
            query: {
                'page': page,
                'size': size,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

}
