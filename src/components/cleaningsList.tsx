import {useSelector} from "react-redux";
import {RootState} from "../store/store";

import React from "react";
import FilterSwitch from "./filterSwitch";
import JobItem from "./jobItem";

function CleaningsList() {
    const {jobs} = useSelector((state: RootState) => state.cleanings)

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
                {jobs && jobs.map(item => <JobItem key={item.uuid} {...item}/>)}
                {jobs.length === 0 && <tr>
                    <td>no jobs</td>
                </tr>}
                </tbody>
            </table>

        </div>

    );
}

export default CleaningsList