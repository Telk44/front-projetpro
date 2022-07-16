import axios from 'axios'

const API_URL = '/activity/'

//create new activity
const createActivity = async (activityData) => {
    // const config = {
    //     headers: {
    //         Authorization: `Bearer ${token}`
    // Authorization: 'Bearer ' + localStorage.getItem("token")
    //     }
    // }

    const response = await axios.post(API_URL, activityData)
    return response.data
}

const activityService = {
    createActivity,
}

export default activityService