import { createAction } from '@reduxjs/toolkit'

export const apiPcStore = createAction('apiPcStore')

export const user = 'user'
export const userReg = 'user/register'

export const land = 'land'
export const landId = id => `land/${id}`
