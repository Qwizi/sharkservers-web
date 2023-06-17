/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Page_Role_CKD_ } from '../models/Page_Role_CKD_';
import type { Role_NNA } from '../models/Role_NNA';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class RolesService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get Roles
     * Get roles
     * :param roles_service:
     * :param params:
     * :return AbstractPage:
     * @param page
     * @param size
     * @returns Page_Role_CKD_ Successful Response
     * @throws ApiError
     */
    public rolesGetRoles(
        page: number = 1,
        size: number = 50,
    ): CancelablePromise<Page_Role_CKD_> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/roles',
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
     * Get Role
     * Get role by id
     * :param role:
     * :return:
     * @param roleId
     * @returns Role_NNA Successful Response
     * @throws ApiError
     */
    public rolesGetRole(
        roleId: number,
    ): CancelablePromise<Role_NNA> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/roles/{role_id}',
            path: {
                'role_id': roleId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

}
