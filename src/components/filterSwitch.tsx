import {JobListFilter} from "../store/cleaningsSlice";
import React from "react";

function FilterSwitch() {
    return (
        <div>
            <button>{JobListFilter.previous}</button>
            <button>{JobListFilter.upcoming}</button>
        </div>
    )
}

export default FilterSwitch