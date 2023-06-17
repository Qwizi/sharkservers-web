/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateServerSchema } from '../models/CreateServerSchema';
import type { Server_MKR } from '../models/Server_MKR';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class AdminServersService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Admin Create Server
     * Create a new server
     * :param servers_service:
     * :param server_data:
     * :return:
     * @param requestBody
     * @returns Server_MKR Successful Response
     * @throws ApiError
     */
    public adminServersAdminCreateServer(
        requestBody: CreateServerSchema,
    ): CancelablePromise<Server_MKR> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/admin/servers',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Admin Delete Server
     * Delete a server
     * :param servers_service:
     * :param server_id:
     * :return:
     * @param serverId
     * @returns any Successful Response
     * @throws ApiError
     */
    public adminServersAdminDeleteServer(
        serverId: number,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/admin/servers/{server_id}',
            path: {
                'server_id': serverId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

}
