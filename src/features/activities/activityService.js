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

//Get user activities
const API_URL_GET = '/activity/user/:id'
const getActivities = async (token) => {

    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }
    console.log("getquoi",config)

    const response = await axios.get(API_URL_GET, config)

    return response.data
    }

const activityService = {
    createActivity,
    getActivities
}

export default activityService

