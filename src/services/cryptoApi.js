import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'

const cryptoApiHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': '6688b15502msh8d61a3e27f34e98p143d5ejsnad6acb6d31cb'
}

const baseURL = 'https://coinranking1.p.rapidapi.com/coins';


export const cryptoApi = createApi({
    reducerPath: 'cryptoApi'
})