import React from "react";
import {Job} from "../model/jobs";

function JobItem(props: Job) {
    const {location, type} = props
    return (
        <tr>
            <td>{type}</td>
            <td>{location}</td>
        </tr>
    )
}

export default JobItem