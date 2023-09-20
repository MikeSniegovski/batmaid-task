import React, {useMemo, useState} from "react";
import FilterSwitch from "../filterSwitch/filterSwitch";
import JobItem from "../jobItem/jobItem";
import {useGetAllCleaningsQuery} from "../../services/cleaningsApi";
import "./cleaningsList.css"
import {Job, JobListFilter} from "../../model/jobs";

function CleaningsList() {
    const {data, isLoading, isError} = useGetAllCleaningsQuery()

    const [filter, setFilter] = useState<JobListFilter>(JobListFilter.upcoming)

    const visibleTodos = useMemo(
        () => filterByDate(data, filter),
        [filter, data]
    );

    return (
        <div>
            <FilterSwitch setFilter={setFilter} currentFilter={filter}/>

            <table className="cleaningsTable">
                <thead>
                <tr>
                    <td>Address</td>
                    <td>Type</td>
                    <td>Date & time</td>
                    <td>Repetition</td>
                    <td>Batmaid</td>
                </tr>
                </thead>

                <tbody>
                {visibleTodos.map(item => <JobItem key={item.uuid} {...item}/>)}
                </tbody>
            </table>
            {isLoading && "Loading..."}
            {isError && "Ups! Something goes wrong. We can't show You any cleanings."}
        </div>

    );
}

const filterByDate = (jobs: Job[] | undefined, filter: JobListFilter): Job[] => {
    // Ponieważ dane z pliku `mock.json` wybiegają poza dziesiejszą datę założyłem poniższą aby poprawnie pokazać filtrowanie
    const today = Number(new Date("2021-05-28 09:30"))


    const filteredJobs = jobs?.filter(item => {
        const jobDate = Number(new Date(item.executionDate))

        if(filter === JobListFilter.upcoming){
            return jobDate > today
        }
        if(filter === JobListFilter.previous){
            return jobDate <= today
        }
    })

    return filteredJobs || []
}

export default CleaningsList