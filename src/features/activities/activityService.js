import axios from 'axios'

const API_URL = '/activity/'

//create new activity
const createActivity = async (activityData, token) => {

    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },

    }
    console.log(config)

    const response = await axios.post(API_URL, activityData, config)

    return response.data
}


const activityService = {
    createActivity
}

export default activityService

