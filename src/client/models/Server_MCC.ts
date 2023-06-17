/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ChatColorModule_TNL } from './ChatColorModule_TNL';
import type { ServerPlayerStats_RYK } from './ServerPlayerStats_RYK';

export type Server_MCC = {
    created_date?: string;
    updated_date?: string;
    id?: number;
    name: string;
    ip: string;
    port: number;
    server_stats?: Array<ServerPlayerStats_RYK>;
    server_chat_color_module?: Array<ChatColorModule_TNL>;
};

