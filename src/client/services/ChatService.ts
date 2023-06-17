/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateChatMessageSchema } from '../models/CreateChatMessageSchema';
import type { Page_Chat_OVH_ } from '../models/Page_Chat_OVH_';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ChatService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get Chat Messages
     * Get chats
     * :param params:
     * :return AbstractPage:
     * @param page
     * @param size
     * @returns Page_Chat_OVH_ Successful Response
     * @throws ApiError
     */
    public chatGetChatMessages(
        page: number = 1,
        size: number = 50,
    ): CancelablePromise<Page_Chat_OVH_> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/chat',
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
     * Create Chat Message
     * Create chat message
     * :param chat:
     * :param user:
     * :return ChatOut:
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public chatCreateChatMessage(
        requestBody: CreateChatMessageSchema,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/chat',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

}
