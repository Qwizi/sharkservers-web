/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Category_CHE } from '../models/Category_CHE';
import type { CreatePostSchema } from '../models/CreatePostSchema';
import type { CreateThreadSchema } from '../models/CreateThreadSchema';
import type { Page_Category_CHE_ } from '../models/Page_Category_CHE_';
import type { Page_PostOut_ } from '../models/Page_PostOut_';
import type { Page_ThreadOut_ } from '../models/Page_ThreadOut_';
import type { Post } from '../models/Post';
import type { PostOut } from '../models/PostOut';
import type { Thread_ZYE } from '../models/Thread_ZYE';
import type { ThreadOut } from '../models/ThreadOut';
import type { UpdatePostSchema } from '../models/UpdatePostSchema';
import type { UpdateThreadSchema } from '../models/UpdateThreadSchema';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ForumService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get Categories
     * Get all categories.
     * :param categories_service:
     * :param params:
     * :return:
     * @param page
     * @param size
     * @returns Page_Category_CHE_ Successful Response
     * @throws ApiError
     */
    public forumGetCategories(
        page: number = 1,
        size: number = 50,
    ): CancelablePromise<Page_Category_CHE_> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/forum/categories',
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
     * Get Category
     * Get category
     * :param category:
     * :return:
     * @param categoryId
     * @returns Category_CHE Successful Response
     * @throws ApiError
     */
    public forumGetCategory(
        categoryId: number,
    ): CancelablePromise<Category_CHE> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/forum/categories/{category_id}',
            path: {
                'category_id': categoryId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Get Threads
     * Get all threads.
     * :param threads_service:
     * :param category_id:
     * :param params:
     * :return:
     * @param categoryId
     * @param page
     * @param size
     * @returns Page_ThreadOut_ Successful Response
     * @throws ApiError
     */
    public forumGetThreads(
        categoryId?: number,
        page: number = 1,
        size: number = 50,
    ): CancelablePromise<Page_ThreadOut_> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/forum/threads',
            query: {
                'category_id': categoryId,
                'page': page,
                'size': size,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Create Thread
     * Create new thread.
     * :param categories_service:
     * :param threads_service:
     * :param thread_data:
     * :param user:
     * :return:
     * @param requestBody
     * @returns Thread_ZYE Successful Response
     * @throws ApiError
     */
    public forumCreateThread(
        requestBody: CreateThreadSchema,
    ): CancelablePromise<Thread_ZYE> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/forum/threads',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Get Thread
     * Get thread by id.
     * :param thread:
     * :return:
     * @param threadId
     * @returns ThreadOut Successful Response
     * @throws ApiError
     */
    public forumGetThread(
        threadId: number,
    ): CancelablePromise<ThreadOut> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/forum/threads/{thread_id}',
            path: {
                'thread_id': threadId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Update Thread
     * Update thread by id.
     * :param thread_data:
     * :param thread:
     * :return:
     * @param threadId
     * @param requestBody
     * @returns ThreadOut Successful Response
     * @throws ApiError
     */
    public forumUpdateThread(
        threadId: number,
        requestBody: UpdateThreadSchema,
    ): CancelablePromise<ThreadOut> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/v1/forum/threads/{thread_id}',
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
     * Get Posts
     * Get all posts by thread id.
     * :param posts_service:
     * :param thread_id:
     * :param params:
     * :return:
     * @param threadId
     * @param page
     * @param size
     * @returns Page_PostOut_ Successful Response
     * @throws ApiError
     */
    public forumGetPosts(
        threadId?: number,
        page: number = 1,
        size: number = 50,
    ): CancelablePromise<Page_PostOut_> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/forum/posts',
            query: {
                'thread_id': threadId,
                'page': page,
                'size': size,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Create Post
     * :param threads_service:
     * :param posts_service:
     * :param post_data:
     * :param user:
     * :return:
     * @param requestBody
     * @returns PostOut Successful Response
     * @throws ApiError
     */
    public forumCreatePost(
        requestBody: CreatePostSchema,
    ): CancelablePromise<PostOut> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/forum/posts',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Get Post By Id
     * Get post by id.
     * :param post:
     * :return:
     * @param postId
     * @returns Post Successful Response
     * @throws ApiError
     */
    public forumGetPostById(
        postId: number,
    ): CancelablePromise<Post> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/forum/posts/{post_id}',
            path: {
                'post_id': postId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Update Post
     * @param postId
     * @param requestBody
     * @returns PostOut Successful Response
     * @throws ApiError
     */
    public forumUpdatePost(
        postId: number,
        requestBody: UpdatePostSchema,
    ): CancelablePromise<PostOut> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/v1/forum/posts/{post_id}',
            path: {
                'post_id': postId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Get Post Likes
     * Get all post likes.
     * :param post:
     * :param likes_service:
     * :return:
     * @param postId
     * @param page
     * @param size
     * @returns any Successful Response
     * @throws ApiError
     */
    public forumGetPostLikes(
        postId: number,
        page: number = 1,
        size: number = 50,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/forum/posts/{post_id}/likes',
            path: {
                'post_id': postId,
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
     * Like Post
     * Like post.
     * :param post:
     * :param user:
     * :param likes_service:
     * :return:
     * @param postId
     * @returns any Successful Response
     * @throws ApiError
     */
    public forumLikePost(
        postId: number,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/forum/posts/{post_id}/like',
            path: {
                'post_id': postId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Dislike Post
     * Dislike post.
     * :param post:
     * :param user:
     * :param likes_service:
     * :return:
     * @param postId
     * @returns any Successful Response
     * @throws ApiError
     */
    public forumDislikePost(
        postId: number,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/forum/posts/{post_id}/dislike',
            path: {
                'post_id': postId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

}
