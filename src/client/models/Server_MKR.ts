/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ChatColorModule_JCG } from './ChatColorModule_JCG';
import type { ServerPlayerStats_CDY } from './ServerPlayerStats_CDY';

export type Server_MKR = {
    created_date?: string;
    updated_date?: string;
    id?: number;
    name: string;
    ip: string;
    port: number;
    server_stats?: Array<ServerPlayerStats_CDY>;
    server_chat_color_module?: Array<ChatColorModule_JCG>;
};

