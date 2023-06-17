/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreatePlayerSchema } from '../models/CreatePlayerSchema';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class PlayersService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get Players
     * @param page
     * @param size
     * @returns any Successful Response
     * @throws ApiError
     */
    public playersGetPlayers(
        page: number = 1,
        size: number = 50,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/players',
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
     * Create Player
     * Create player
     * :param app:
     * :param player_data:
     * :param players_service:
     * :return:
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public playersCreatePlayer(
        requestBody: CreatePlayerSchema,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/players',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Get Player
     * @param steamid64
     * @returns any Successful Response
     * @throws ApiError
     */
    public playersGetPlayer(
        steamid64: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/players/{steamid64}',
            path: {
                'steamid64': steamid64,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

}
