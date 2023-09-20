import React, {Dispatch, MouseEvent, SetStateAction} from "react";
import {JobListFilter} from "../../model/jobs";
import "./filterSwitch.css"

type FilterSwitchProps = {
    setFilter: Dispatch<SetStateAction<JobListFilter>>
    currentFilter: JobListFilter
}

function FilterSwitch({setFilter, currentFilter}: FilterSwitchProps) {

    const filter = (event: MouseEvent<HTMLButtonElement>) => {
        const value = event.currentTarget.value as JobListFilter
        setFilter(value)
    }

    const renderButton = (value: JobListFilter) => {
        return <button className={`switchButton ${value === currentFilter && 'active'}`} value={value}
                       onClick={filter}>{value}</button>
    }

    return (
        <div className="switchWrapper">
            {renderButton(JobListFilter.previous)}
            {renderButton(JobListFilter.upcoming)}
        </div>
    )
}


export default FilterSwitch