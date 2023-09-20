import React from "react";
import {Job, JobType} from "../../model/jobs";
import "./jobItem.css"
import {addHours, formatDate, formatTime} from "../../utils/formaters";

function JobItem(props: Job) {
    const {location, type, executionDate, agent, contractPeriodicity, duration, position} = props

    return (
        <tr className={`cleaningsItem ${position}`}>
            <td>{formatAddress(location, position)}</td>
            <td>{formatType(type)}</td>
            <td>{formatExecutionDate(executionDate, duration)}</td>
            <td>{formatRepetition(contractPeriodicity)}</td>
            <td>{agent}</td>
        </tr>
    )
}

const formatAddress = (address: string, position: string | undefined): string => {
    return position === "first" ? address : ""
}

const formatType = (type: string):string => {
    switch (type) {
        case JobType.end_of_tenancy:
            return 'End of Tenancy'
        case JobType.home_cleaning:
            return 'Home cleaning'
        default:
            return ''
    }
}

const formatRepetition = (periodicity: number):string => {
    switch (periodicity) {
        case 7:
            return 'Weekly'
        case 14:
            return 'Every two weeks'
        case 28:
            return 'Monthly'
        default:
            return ''
    }
}

const formatExecutionDate = (date: string, timeSpent: number) => {

    const jobDate = new Date(date)
    const endTime = new Date(addHours(jobDate, timeSpent))
    return <span>{formatDate(jobDate)}<br/>{formatTime(jobDate)} - {formatTime(endTime)}</span>
}
export default JobItem