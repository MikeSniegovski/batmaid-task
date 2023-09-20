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
        getAllCleanings: builder.query<Job[], void>({
            query: () => `cleanings`,
            transformResponse: (resp: ApiResp) => {
                return jobsSorter(resp.jobs, resp.jobsByLocation)
            }
        }),
    }),
})

export const {useGetAllCleaningsQuery} = cleaningsApi

export const jobsSorter = (jobs: Job[], jobsByLocation: JobsByLocation[]) => {
    let transformed: Job[] = []
    jobsByLocation.forEach(location => {
        const byLocation: Job[] = jobs.filter(item=> location.jobs.includes(item.uuid)).sort(sortByDate)
        const enhancedJobs = byLocation.map((item, index)=> ({...item, position: jobLocationPosition(index, byLocation.length - 1)}))

        transformed = [
            ...transformed,
            ...enhancedJobs
        ]
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

const sortByDate = (jobA: Job, jobB: Job) => {
    const dateJobA = Number(new Date(jobA.executionDate))
    const dateJobB = Number(new Date(jobB.executionDate))

    return dateJobA - dateJobB
}