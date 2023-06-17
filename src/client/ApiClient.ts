/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseHttpRequest } from './core/BaseHttpRequest';
import type { OpenAPIConfig } from './core/OpenAPI';
import { FetchHttpRequest } from './core/FetchHttpRequest';

import { AdminBansService } from './services/AdminBansService';
import { AdminForumService } from './services/AdminForumService';
import { AdminPlayersService } from './services/AdminPlayersService';
import { AdminRolesService } from './services/AdminRolesService';
import { AdminScopesService } from './services/AdminScopesService';
import { AdminServersService } from './services/AdminServersService';
import { AdminUsersService } from './services/AdminUsersService';
import { AuthService } from './services/AuthService';
import { ChatService } from './services/ChatService';
import { ForumService } from './services/ForumService';
import { PlayersService } from './services/PlayersService';
import { RolesService } from './services/RolesService';
import { RootService } from './services/RootService';
import { ScopesService } from './services/ScopesService';
import { ServersService } from './services/ServersService';
import { UsersService } from './services/UsersService';

type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;

export class ApiClient {

    public readonly adminBans: AdminBansService;
    public readonly adminForum: AdminForumService;
    public readonly adminPlayers: AdminPlayersService;
    public readonly adminRoles: AdminRolesService;
    public readonly adminScopes: AdminScopesService;
    public readonly adminServers: AdminServersService;
    public readonly adminUsers: AdminUsersService;
    public readonly auth: AuthService;
    public readonly chat: ChatService;
    public readonly forum: ForumService;
    public readonly players: PlayersService;
    public readonly roles: RolesService;
    public readonly root: RootService;
    public readonly scopes: ScopesService;
    public readonly servers: ServersService;
    public readonly users: UsersService;

    public readonly request: BaseHttpRequest;

    constructor(config?: Partial<OpenAPIConfig>, HttpRequest: HttpRequestConstructor = FetchHttpRequest) {
        this.request = new HttpRequest({
            BASE: config?.BASE ?? '',
            VERSION: config?.VERSION ?? '0.0.34',
            WITH_CREDENTIALS: config?.WITH_CREDENTIALS ?? false,
            CREDENTIALS: config?.CREDENTIALS ?? 'include',
            TOKEN: config?.TOKEN,
            USERNAME: config?.USERNAME,
            PASSWORD: config?.PASSWORD,
            HEADERS: config?.HEADERS,
            ENCODE_PATH: config?.ENCODE_PATH,
        });

        this.adminBans = new AdminBansService(this.request);
        this.adminForum = new AdminForumService(this.request);
        this.adminPlayers = new AdminPlayersService(this.request);
        this.adminRoles = new AdminRolesService(this.request);
        this.adminScopes = new AdminScopesService(this.request);
        this.adminServers = new AdminServersService(this.request);
        this.adminUsers = new AdminUsersService(this.request);
        this.auth = new AuthService(this.request);
        this.chat = new ChatService(this.request);
        this.forum = new ForumService(this.request);
        this.players = new PlayersService(this.request);
        this.roles = new RolesService(this.request);
        this.root = new RootService(this.request);
        this.scopes = new ScopesService(this.request);
        this.servers = new ServersService(this.request);
        this.users = new UsersService(this.request);
    }
}

