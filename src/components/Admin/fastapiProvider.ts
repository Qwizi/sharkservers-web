import {fetchUtils} from "ra-core";
import {Identifier} from "postcss-selector-parser";
import {stringify} from "querystring";

export default (apiUrl: String, httpClient: Function = fetchUtils.fetchJson) => {
    const getOneJson = (resource: String, id: Identifier) => httpClient(`${apiUrl}/${resource}/${id}/`).then((response: Response) => response.json);
    const getPagination = (pagination: any) => {
        return {
            page: pagination.page, size: pagination.perPage
        }
    }
    return {

        // @ts-ignore
        getList: async (resource, params) => {
            const query = {
                ...getPagination(params.pagination),
            }
            const url = `${apiUrl}/${resource}?${stringify(query)}`;

            const {json} = await httpClient(url);

            return {
                data: json.items, total: json.total,
            };
        }, // @ts-ignore
        getOne: async (resource, params) => {
            const data = await getOneJson(resource, params.id);
            return {
                data,
            };

        }, // @ts-ignore
        create: (resource, params) => httpClient(`${apiUrl}/${resource}`, {
            method: 'POST', body: JSON.stringify(params.data), // @ts-ignore
        }).then(({json}) => ({
            data: {...params.data, id: json.id},
        })), // @ts-ignore
        delete: (resource, params) => httpClient(`${apiUrl}/${resource}/${params.id}`, {
            method: 'DELETE', // @ts-ignore
        }).then(({json}) => ({data: json})),
        // @ts-ignore
        update: async (resource, params) => {
            const {json} = await httpClient(`${apiUrl}/${resource}/${params.id}/`, {
                method: 'PUT', body: JSON.stringify(params.data),
            });
            return {data: json};
        },

    }
}