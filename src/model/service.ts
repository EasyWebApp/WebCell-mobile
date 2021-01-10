import { HTTPClient } from 'koajax';

export const service = new HTTPClient({
    baseURI: 'https://fcc-cd.dev/996-data/',
    responseType: 'json'
});
