const apiUrl = (path, id = 0) => {
    if (id == 0) {
        return path;
    } else {
        return path + '/' + id;
    }
}
export default apiUrl;
