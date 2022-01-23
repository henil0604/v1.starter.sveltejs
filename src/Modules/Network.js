import urlJoin from 'proper-url-join';
import axios from 'axios';

class Network {

    constructor(baseUrl) {
        this.baseUrl = baseUrl;

    }

    async GET(url) {
        url = this.URLJoin(url);
        return await Network.GET(url);
    }

    async POST(url, data) {
        url = this.URLJoin(url);
        return await Network.POST(url, data);
    }

    URLJoin(url) {
        return urlJoin(this.baseUrl, url);
    }


    static async REQUEST(url, data = {}, method = "get") {
        try {
            const response = await axios({
                url,
                method,
                data
            })

            return {
                status: response.status,
                data: response.data
            }
        } catch (error) {
            if (error.response) {
                return {
                    status: error.response.status,
                    data: error.response.data || null,
                }
            }

            return {
                status: "error",
                data: null
            }
        }
    }

    static async GET(url) {
        return await Network.REQUEST(url, {}, "get");
    }

    static async POST(url, data) {
        return await Network.REQUEST(url, data, "post");
    }

}

export default Network;