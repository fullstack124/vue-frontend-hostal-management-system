class BasApiResponse {
    getGetApiResponse(url, headers) {
        throw new Error("Method 'getGetApiResponse' must be implemented in the derived class.");
    }
}

export default BasApiResponse;
