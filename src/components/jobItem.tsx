import React from "react";
import {Job} from "../model/jobs";

function JobItem(props: Job) {
    const {location, type, executionDate, agent, contractPeriodicity} = props

    return (
        <tr>
            <td>{location}</td>
            <td>{type}</td>
            <td>{executionDate}</td>
            <td>{contractPeriodicity}</td>
            <td>{agent}</td>
        </tr>
    )
}

export default JobItem