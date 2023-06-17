/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateScopeSchema } from '../models/CreateScopeSchema';
import type { Page_Scope_OGB_ } from '../models/Page_Scope_OGB_';
import type { Scope_OGB } from '../models/Scope_OGB';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class AdminScopesService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Admin Get Scopes
     * Admin get scopes.
     * :param params:
     * :param user:
     * :return:
     * @param page
     * @param size
     * @returns Page_Scope_OGB_ Successful Response
     * @throws ApiError
     */
    public adminScopesAdminGetScopes(
        page: number = 1,
        size: number = 50,
    ): CancelablePromise<Page_Scope_OGB_> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/admin/scopes',
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
     * Admin Create Scope
     * Admin create scope.
     * :param scope_data:
     * :param user:
     * :return:
     * @param requestBody
     * @returns Scope_OGB Successful Response
     * @throws ApiError
     */
    public adminScopesAdminCreateScope(
        requestBody: CreateScopeSchema,
    ): CancelablePromise<Scope_OGB> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/admin/scopes',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Admin Get Scope
     * @param scopeId
     * @returns Scope_OGB Successful Response
     * @throws ApiError
     */
    public adminScopesAdminGetScope(
        scopeId: number,
    ): CancelablePromise<Scope_OGB> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/admin/scopes/{scope_id}',
            path: {
                'scope_id': scopeId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Admin Delete Scope
     * Admin delete scope.
     * :param scope_id:
     * :param user:
     * :return:
     * @param scopeId
     * @returns Scope_OGB Successful Response
     * @throws ApiError
     */
    public adminScopesAdminDeleteScope(
        scopeId: number,
    ): CancelablePromise<Scope_OGB> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/admin/scopes/{scope_id}',
            path: {
                'scope_id': scopeId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

}
