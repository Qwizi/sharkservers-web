/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreatePlayerChatColorSchema } from '../models/CreatePlayerChatColorSchema';
import type { Server_MKR } from '../models/Server_MKR';
import type { UpdatePlayerChatColorSchema } from '../models/UpdatePlayerChatColorSchema';
import type { UpdatePlayerStatsSchema } from '../models/UpdatePlayerStatsSchema';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ServersService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get Servers
     * Get all servers
     * :return:
     * @param ip
     * @param port
     * @param page
     * @param size
     * @returns any Successful Response
     * @throws ApiError
     */
    public serversGetServers(
        ip?: string,
        port?: number,
        page: number = 1,
        size: number = 50,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/servers/',
            query: {
                'ip': ip,
                'port': port,
                'page': page,
                'size': size,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Get Servers Status
     * Get all servers' status
     * :return:
     * @returns any Successful Response
     * @throws ApiError
     */
    public serversGetServersStatus(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/servers/status',
        });
    }

    /**
     * Get Server
     * Get server by id
     * :param server:
     * :param server_id:
     * :return:
     * @param serverId
     * @returns Server_MKR Successful Response
     * @throws ApiError
     */
    public serversGetServer(
        serverId: number,
    ): CancelablePromise<Server_MKR> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/servers/{server_id}',
            path: {
                'server_id': serverId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Get Players Stats
     * Get server player stats
     * :param server_player_stats_service:
     * :param server:
     * :return:
     * @param serverId
     * @param page
     * @param size
     * @returns any Successful Response
     * @throws ApiError
     */
    public serversGetPlayersStats(
        serverId: number,
        page: number = 1,
        size: number = 50,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/servers/{server_id}/player-stats',
            path: {
                'server_id': serverId,
            },
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
     * Get Server Player Stats
     * Get server player stats
     * :param server_player_stats:
     * :param player:
     * :param server_player_stats_service:
     * :param server:
     * :return:
     * @param serverId
     * @param steamid64
     * @returns any Successful Response
     * @throws ApiError
     */
    public serversGetServerPlayerStats(
        serverId: number,
        steamid64: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/servers/{server_id}/player-stats/{steamid64}',
            path: {
                'server_id': serverId,
                'steamid64': steamid64,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Update Server Player Stats
     * Update server player stats
     * :param player_stats_service:
     * :param server_player_stats:
     * :return:
     * @param serverId
     * @param steamid64
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public serversUpdateServerPlayerStats(
        serverId: number,
        steamid64: string,
        requestBody: UpdatePlayerStatsSchema,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/v1/servers/{server_id}/player-stats/{steamid64}',
            path: {
                'server_id': serverId,
                'steamid64': steamid64,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Create Server Player Stats
     * Create server player stats
     * :param player:
     * :param server_player_stats_service:
     * :param server:
     * :return:
     * @param serverId
     * @param steamid64
     * @returns any Successful Response
     * @throws ApiError
     */
    public serversCreateServerPlayerStats(
        serverId: number,
        steamid64: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/servers/{server_id}/player-stats/{steamid64}',
            path: {
                'server_id': serverId,
                'steamid64': steamid64,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Get Players Chat Colors
     * Get players chat colors
     * :param flag:
     * :param server:
     * :param chat_color_module_service:
     * :return:
     * @param serverId
     * @param flag
     * @param steamid64
     * @param page
     * @param size
     * @returns any Successful Response
     * @throws ApiError
     */
    public serversGetPlayersChatColors(
        serverId: number,
        flag?: string,
        steamid64?: string,
        page: number = 1,
        size: number = 50,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/servers/{server_id}/modules/chat-colors/',
            path: {
                'server_id': serverId,
            },
            query: {
                'flag': flag,
                'steamid64': steamid64,
                'page': page,
                'size': size,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Create Player Chat Color
     * Create player chat color
     * :param data:
     * :param chat_color_module_service:
     * :param player:
     * :param server:
     * :return:
     * @param serverId
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public serversCreatePlayerChatColor(
        serverId: number,
        requestBody: CreatePlayerChatColorSchema,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/servers/{server_id}/modules/chat-colors/',
            path: {
                'server_id': serverId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Update Player Chat Color
     * Update player chat color
     * :param tag_id:
     * :param data:
     * :param chat_color_module_service:
     * :param server:
     * :return:
     * @param tagId
     * @param serverId
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public serversUpdatePlayerChatColor(
        tagId: number,
        serverId: number,
        requestBody: UpdatePlayerChatColorSchema,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/v1/servers/{server_id}/modules/chat-colors/{tag_id}',
            path: {
                'tag_id': tagId,
                'server_id': serverId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

}
