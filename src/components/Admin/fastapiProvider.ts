import {fetchUtils} from "ra-core";
import {Identifier} from "postcss-selector-parser";

export default (apiUrl: String, httpClient: Function = fetchUtils.fetchJson) => {
    const getOneJson = (resource: String, id: Identifier) => httpClient(`${apiUrl}/${resource}/${id}/`).then((response: Response) => response.json);


    return {
        // @ts-ignore
        getList: async (resource, params) => {
            const url = `${apiUrl}/${resource}/`;

            const {json} = await httpClient(url);

            return {
                data: json.items, total: json.total,
            };
        },
    }
}