import { configureStore } from '@reduxjs/toolkit'
import middleware from './middleware'
import login from './user/login'
import lands from './lands'

export default configureStore({
    reducer: { login, lands },
    middleware: [middleware],
})
