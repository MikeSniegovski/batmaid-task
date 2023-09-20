import React from "react";
import FilterSwitch from "../filterSwitch";
import JobItem from "../jobItem/jobItem";
import {jobsSorter, useGetAllCleaningsQuery} from "../../services/cleaningsApi";
import "./cleaningsList.css"
import {useSelector} from "react-redux";

function CleaningsList() {
    const {data, isLoading} = useGetAllCleaningsQuery()

    return (
        <div>
            <FilterSwitch/>

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
                {data && jobsSorter(data.jobs, data.jobsByLocation).map(item => <JobItem key={item.uuid} {...item}/>)}
                {data?.jobs.length === 0 && <tr>
                    <td>no jobs</td>
                </tr>}
                </tbody>
            </table>
            {isLoading && "Loading..."}

        </div>

    );
}

export default CleaningsList