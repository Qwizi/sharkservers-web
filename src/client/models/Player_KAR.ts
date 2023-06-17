/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SteamRepProfile_WQD } from './SteamRepProfile_WQD';

export type Player_KAR = {
    created_date?: string;
    updated_date?: string;
    id?: number;
    steamrep_profile?: SteamRepProfile_WQD;
    username: string;
    steamid3: string;
    steamid32: string;
    steamid64: string;
    profile_url?: string;
    avatar?: string;
    country_code: string;
    reputation?: number;
};

