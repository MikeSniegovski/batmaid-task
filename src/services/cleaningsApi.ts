import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {Job, JobsByLocation} from "../model/jobs";

export interface ApiResp {
    jobs: Job[],
    jobsByLocation: JobsByLocation[]
}

export const cleaningsApi = createApi({
    reducerPath: 'cleaningsApi',
    baseQuery: fetchBaseQuery({baseUrl: '/'}),
    endpoints: (builder) => ({
        getAllCleanings: builder.query<ApiResp, void>({
            query: () => `cleanings`,
        }),
    }),
})

export const {useGetAllCleaningsQuery} = cleaningsApi

export const jobsSorter = (jobs: Job[], jobsByLocation: JobsByLocation[]) => {
    let transformed: Job[] = []
    jobsByLocation.forEach(location => {
        location.jobs.forEach((job, index) => {
            let enhancedJob = jobs.find(item => item.uuid === job)

            if(enhancedJob){
                let position = jobLocationPosition(index, location.jobs.length - 1)

                transformed.push({...enhancedJob, position})
            }
        })
    })

    return transformed
}

const jobLocationPosition = (index: number, length: number):string => {
    if(index === 0 ){
       return "first"
    }
    if(index === length ){
        return "last"
    }
    return ""
}