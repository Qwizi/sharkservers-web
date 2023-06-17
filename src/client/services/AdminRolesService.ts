/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateRoleSchema } from '../models/CreateRoleSchema';
import type { Page_Role_CKD_ } from '../models/Page_Role_CKD_';
import type { Role_CKD } from '../models/Role_CKD';
import type { Role_NNA } from '../models/Role_NNA';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class AdminRolesService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Admin Get Roles
     * Admin get all roles.
     * :param params:
     * :param user:
     * :return AbstractPag[RoleOut]:
     * @param page
     * @param size
     * @returns Page_Role_CKD_ Successful Response
     * @throws ApiError
     */
    public adminRolesAdminGetRoles(
        page: number = 1,
        size: number = 50,
    ): CancelablePromise<Page_Role_CKD_> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/admin/roles',
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
     * Admin Create Role
     * @param requestBody
     * @returns Role_NNA Successful Response
     * @throws ApiError
     */
    public adminRolesAdminCreateRole(
        requestBody: CreateRoleSchema,
    ): CancelablePromise<Role_NNA> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/admin/roles',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Admin Get Role
     * Admin get role by id.
     * :param role_id:
     * :param user:
     * :return:
     * @param roleId
     * @returns Role_NNA Successful Response
     * @throws ApiError
     */
    public adminRolesAdminGetRole(
        roleId: number,
    ): CancelablePromise<Role_NNA> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/admin/roles/{role_id}',
            path: {
                'role_id': roleId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Admin Delete Role
     * @param roleId
     * @returns any Successful Response
     * @throws ApiError
     */
    public adminRolesAdminDeleteRole(
        roleId: number,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/admin/roles/{role_id}',
            path: {
                'role_id': roleId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Admin Add Scopes To Role
     * @param roleId
     * @param requestBody
     * @returns Role_CKD Successful Response
     * @throws ApiError
     */
    public adminRolesAdminAddScopesToRole(
        roleId: number,
        requestBody: Array<number>,
    ): CancelablePromise<Role_CKD> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/admin/roles/{role_id}/scopes/add',
            path: {
                'role_id': roleId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

}
