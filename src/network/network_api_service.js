import BasApiResponse from "./base_api_response";

class NetworkApiResponse extends BasApiResponse {
   static async getPostApiResponse(url, headers) {
        let res;
        try {
            const res_data = await (await fetch(url, headers)).json();
            res = res_data;
        } catch (error) {
            throw new Error(error.message);
        }
        return res;
    }
}

export default NetworkApiResponse;
