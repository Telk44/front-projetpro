import { configureStore} from "@reduxjs/toolkit"
import authReducer from '../features/auth/authSlice'
import activityReducer from '../features/activities/activitySlice'

export default configureStore({
    reducer:{
        auth: authReducer,
        activity: activityReducer,
    },
})