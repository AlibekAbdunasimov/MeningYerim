import { configureStore } from '@reduxjs/toolkit'
import middleware from './middleware'
import login from './user/login'

export default configureStore({
    reducer: { login },
    middleware: [middleware],
})