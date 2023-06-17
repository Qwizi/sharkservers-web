/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ActivateUserCodeSchema } from '../models/ActivateUserCodeSchema';
import type { Body_auth_get_app_token } from '../models/Body_auth_get_app_token';
import type { Body_auth_login_user } from '../models/Body_auth_login_user';
import type { RefreshTokenSchema } from '../models/RefreshTokenSchema';
import type { RegisterUserSchema } from '../models/RegisterUserSchema';
import type { ResendActivationCodeSchema } from '../models/ResendActivationCodeSchema';
import type { TokenSchema } from '../models/TokenSchema';
import type { User_LVF } from '../models/User_LVF';
import type { UserActivatedSchema } from '../models/UserActivatedSchema';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class AuthService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Register
     * Register a new user
     * :param auth_service:
     * :param user_data:
     * :param redis:
     * :return UserOut:
     * @param requestBody
     * @returns User_LVF Successful Response
     * @throws ApiError
     */
    public authRegister(
        requestBody: RegisterUserSchema,
    ): CancelablePromise<User_LVF> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/auth/register',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Login User
     * Login user
     * :param auth_service:
     * :param refresh_token_service:
     * :param access_token_service:
     * :param form_data:
     * :return TokenSchema:
     * @param formData
     * @returns TokenSchema Successful Response
     * @throws ApiError
     */
    public authLoginUser(
        formData: Body_auth_login_user,
    ): CancelablePromise<TokenSchema> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/auth/token',
            formData: formData,
            mediaType: 'application/x-www-form-urlencoded',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Get Access Token From Refresh Token
     * Get access token from refresh token
     * :param token_data:
     * :param settings:
     * :return TokenSchema:
     * @param requestBody
     * @returns TokenSchema Successful Response
     * @throws ApiError
     */
    public authGetAccessTokenFromRefreshToken(
        requestBody: RefreshTokenSchema,
    ): CancelablePromise<TokenSchema> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/auth/token/refresh',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Logout User
     * Logout user
     * :param auth_service:
     * :param user:
     * :return:
     * @returns User_LVF Successful Response
     * @throws ApiError
     */
    public authLogoutUser(): CancelablePromise<User_LVF> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/auth/logout',
        });
    }

    /**
     * Activate User
     * Activate user
     * :param auth_service:
     * :param activate_code_data:
     * :param redis:
     * :return bool:
     * @param requestBody
     * @returns UserActivatedSchema Successful Response
     * @throws ApiError
     */
    public authActivateUser(
        requestBody: ActivateUserCodeSchema,
    ): CancelablePromise<UserActivatedSchema> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/auth/activate',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Resend Activate Code
     * Resend activate code
     * :param auth_service:
     * :param data:
     * :param redis:
     * :return bool:
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public authResendActivateCode(
        requestBody: ResendActivationCodeSchema,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/auth/activate/resend',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Connect Steam Profile
     * @returns any Successful Response
     * @throws ApiError
     */
    public authConnectSteamProfile(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/auth/connect/steam',
        });
    }

    /**
     * Steam Profile Callback
     * @returns any Successful Response
     * @throws ApiError
     */
    public authSteamProfileCallback(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/auth/callback/steam',
        });
    }

    /**
     * Get App Token
     * Get app token
     * :param auth_service:
     * :param access_token_service:
     * :param form_data:
     * :return TokenSchema:
     * @param formData
     * @returns TokenSchema Successful Response
     * @throws ApiError
     */
    public authGetAppToken(
        formData?: Body_auth_get_app_token,
    ): CancelablePromise<TokenSchema> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/auth/apps/token',
            formData: formData,
            mediaType: 'application/x-www-form-urlencoded',
            errors: {
                422: `Validation Error`,
            },
        });
    }

}
