import axios from "axios"
const url: string = 'http://localhost:3344/api/v1'

export const createArticle = async (data: any, userID: string) => {
    try {
        const config: {} = {
            'content-type': "multipart/form-data"
        }

        return await axios.post(`${url}/${userID}/create-article`, data, config).then((res: any) => {
            return res.data.data
        })

    } catch (error) {
        console.log(error)
    }
} 

export const readArticle = async (userID: string) => {
    try {
        return await axios.get(`${url}/${userID}/read-friend-article`).then((res: any) => {

            return res.data.data
        })
    } catch (error) {
        console.log(error);

    }
}