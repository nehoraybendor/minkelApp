import axios from "axios"

export const serviceAPI = async (method, url, body = {}) => {
    try {
        const data = await axios(
            {
                method,
                url,
                data: body,
                headers: {
                    'x-api-key': localStorage.getItem('token'),
                },
            }
        )
        return data

    } catch (error) {
        throw error.response
    }
}