import { fetchUtils } from 'react-admin';
import { stringify } from 'query-string';

const apiUrl = 'http://127.0.0.1/rest/api/1/';
const httpClient = fetchUtils.fetchJson;

const dataProvider = {
    getList: (resource, params) => {
        const query = {
            filter: JSON.stringify(params.filter),
        };
        const url = `${apiUrl}/${resource}?${stringify(query)}`;

        return httpClient(url).then(({ headers, json }) => ({
            data: json,
            total: parseInt(headers.get('content-range').split('/').pop(), 10),
        }));
    }
}


// getList returns a list of repositories based on the filter options.
export default dataProvider
