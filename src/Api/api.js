import axios from "axios";

const fetchImages = async (page) => {
    const res = await axios({
        url : `https://api.unsplash.com/photos?page=${page}&per_page=30`,
        method : 'GET',
        headers : {
            'Authorization' : 'Client-ID -JWnzmDSXjVS2YvhGvpUW8UyIMVAvmzeM-fikZ-K1ig'
        }
    });
    if
    (res.status >= 400) {
        throw new Error(res.error);
    }

    return res.data
}

export default fetchImages;