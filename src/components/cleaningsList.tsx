import React from "react";
import FilterSwitch from "./filterSwitch";
import JobItem from "./jobItem";
import {useGetAllCleaningsQuery} from "../services/cleaningsApi";

function CleaningsList() {
    const {data, isLoading} = useGetAllCleaningsQuery()

    return (

        <div>
            <FilterSwitch/>

            <table>
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
                {data && data.jobs.map(item => <JobItem key={item.uuid} {...item}/>)}
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