import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {Job, JobsByLocation} from "../model/jobs";

export interface ApiResp {
    jobs: Job[],
    jobsByLocation: JobsByLocation[]
}
export const cleaningsApi = createApi({
    reducerPath: 'cleaningsApi',
    baseQuery: fetchBaseQuery({ baseUrl: '/' }),
    endpoints: (builder) => ({
        getAllCleanings: builder.query<ApiResp, void>({
            query: () => `cleanings`,
        }),
    }),
})

export const { useGetAllCleaningsQuery } = cleaningsApi