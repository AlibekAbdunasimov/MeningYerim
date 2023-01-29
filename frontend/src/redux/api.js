import { createAction } from '@reduxjs/toolkit'

export const apiLand = createAction('apiLand')

export const user = 'user'
export const userReg = 'user/register'

export const land = 'lands'
export const landId = id => `lands/${id}`
