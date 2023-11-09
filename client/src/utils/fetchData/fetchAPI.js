import axios from "axios";

const fetchAPI = async (url) => {
    try {
        const response = await axios.get(url)
        return response.data
    } catch (error) {
        return error
    }
}

export default fetchAPI