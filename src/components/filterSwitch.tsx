import React from "react";
import {JobListFilter} from "../model/jobs";

function FilterSwitch() {
    return (
        <div>
            <button>{JobListFilter.previous}</button>
            <button>{JobListFilter.upcoming}</button>
        </div>
    )
}

export default FilterSwitch