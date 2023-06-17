/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreatePlayerSchema } from '../models/CreatePlayerSchema';
import type { Player_KAR } from '../models/Player_KAR';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class AdminPlayersService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Admin Get Steam Profiles
     * @param page
     * @param size
     * @returns any Successful Response
     * @throws ApiError
     */
    public adminPlayersAdminGetSteamProfiles(
        page: number = 1,
        size: number = 50,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/admin/players',
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
     * Admin Create Player
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public adminPlayersAdminCreatePlayer(
        requestBody: CreatePlayerSchema,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/admin/players',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Admin Get Steam Profile
     * @param profileId
     * @returns Player_KAR Successful Response
     * @throws ApiError
     */
    public adminPlayersAdminGetSteamProfile(
        profileId: number,
    ): CancelablePromise<Player_KAR> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/admin/players/{profile_id}',
            path: {
                'profile_id': profileId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Admin Delete Steam Profile
     * @param profileId
     * @returns Player_KAR Successful Response
     * @throws ApiError
     */
    public adminPlayersAdminDeleteSteamProfile(
        profileId: number,
    ): CancelablePromise<Player_KAR> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/admin/players/{profile_id}',
            path: {
                'profile_id': profileId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

}
