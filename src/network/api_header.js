const apiHeader = (method, body, headers) => {
    if (body == null) {
        return {
            method: method,
            headers: headers
        }
    } else {
        return {
            method: method,
            body: JSON.stringify(body),
            headers: headers
        }
    }
}


export default  apiHeader;