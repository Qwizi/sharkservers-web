/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AdminCreatePostSchema } from '../models/AdminCreatePostSchema';
import type { AdminUpdatePostSchema } from '../models/AdminUpdatePostSchema';
import type { AdminUpdateThreadSchema } from '../models/AdminUpdateThreadSchema';
import type { CreateCategorySchema } from '../models/CreateCategorySchema';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class AdminForumService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Admin Create Category
     * Create category
     * :param categories_service:
     * :param category_data:
     * :return:
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public adminForumAdminCreateCategory(
        requestBody: CreateCategorySchema,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/admin/forum/categories',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Admin Delete Category
     * Delete category
     * :param categories_service:
     * :param user:
     * :param category:
     * :return:
     * @param categoryId
     * @returns any Successful Response
     * @throws ApiError
     */
    public adminForumAdminDeleteCategory(
        categoryId: number,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/v1/admin/forum/categories/{category_id}',
            path: {
                'category_id': categoryId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Admin Update Thread
     * @param threadId
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public adminForumAdminUpdateThread(
        threadId: number,
        requestBody: AdminUpdateThreadSchema,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/v1/admin/forum/threads/{thread_id}',
            path: {
                'thread_id': threadId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Admin Delete Thread
     * @param threadId
     * @returns any Successful Response
     * @throws ApiError
     */
    public adminForumAdminDeleteThread(
        threadId: number,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/v1/admin/forum/threads/{thread_id}',
            path: {
                'thread_id': threadId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Admin Close Thread
     * @param threadId
     * @returns any Successful Response
     * @throws ApiError
     */
    public adminForumAdminCloseThread(
        threadId: number,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/admin/forum/threads/{thread_id}/close',
            path: {
                'thread_id': threadId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Admin Open Thread
     * @param threadId
     * @returns any Successful Response
     * @throws ApiError
     */
    public adminForumAdminOpenThread(
        threadId: number,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/admin/forum/threads/{thread_id}/open',
            path: {
                'thread_id': threadId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Admin Create Post
     * Create post
     * :param posts_service:
     * :param post_data:
     * :param thread:
     * :param user:
     * :return:
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public adminForumAdminCreatePost(
        requestBody: AdminCreatePostSchema,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/admin/forum/posts/',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Admin Update Post
     * Update post
     * :param posts_service:
     * :param post:
     * :param post_data:
     * :param user:
     * :return:
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public adminForumAdminUpdatePost(
        requestBody: AdminUpdatePostSchema,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/v1/admin/forum/posts/{post_id}',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Admin Delete Post
     * Delete post
     * :param posts_service:
     * :param post:
     * :param user:
     * :return:
     * @param postId
     * @returns any Successful Response
     * @throws ApiError
     */
    public adminForumAdminDeletePost(
        postId: number,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/v1/admin/forum/posts/{post_id}',
            path: {
                'post_id': postId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

}
