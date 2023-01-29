import { createSlice } from '@reduxjs/toolkit'
import { apiLand, land, landId } from './api'

const lands = createSlice({
    name: 'lands',
    initialState: { isLoading: false, lands: [], land: {}, success: false },
    reducers: {
        onStart: state => {
            state.isLoading = true
        },
        onGetLands: (state, { payload }) => {
            state.isLoading = false
            state.lands = payload
        },
        onGetLand: (state, { payload }) => {
            state.isLoading = false
            state.land = payload
        },
        onDeleteEditAdd: (state, { payload }) => {
            state.isLoading = false
            state.success = payload.success
        },
        onFail: (state, { payload }) => {
            state.isLoading = false
            state.success = payload.success
        },
    },
})

export const getLands = params =>
    apiLand({
        url: land,
        method: 'get',
        params,
        onStart: lands.actions.onStart.type,
        onSuccess: lands.actions.onGetLands.type,
        onFail: lands.actions.onFail.type,
    })

export const getLand = id =>
    apiLand({
        url: landId(id),
        method: 'get',
        onStart: lands.actions.onStart.type,
        onSuccess: lands.actions.onGetLand.type,
        onFail: lands.actions.onFail.type,
    })

export const addLand = data =>
    apiLand({
        url: land,
        method: 'post',
        data,
        onStart: lands.actions.onStart.type,
        onSuccess: lands.actions.onGetLand.type,
        onFail: lands.actions.onFail.type,
    })

export const editLand = data =>
    apiLand({
        url: landId(data.id),
        method: 'put',
        data,
        onStart: lands.actions.onStart.type,
        onSuccess: lands.actions.onGetLand.type,
        onFail: lands.actions.onFail.type,
    })

export const deleteLand = id =>
    apiLand({
        url: landId(id),
        method: 'delete',
        onStart: lands.actions.onStart.type,
        onSuccess: lands.actions.onGetLand.type,
        onFail: lands.actions.onFail.type,
    })

export default lands.reducer
