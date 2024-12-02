import React from "react";

const Filter = ({ filters, onFilterChange }) => {
    const handleCheckboxChange = (filterName, value) => {
        onFilterChange(filterName, value);
    };

    return (
        <div>
            {filters.map((filter) => (
                <div key={filter.name}>
                    <label>
                        <input
                            type="checkbox"
                            checked={filter.selected}
                            onChange={(e) =>
                                handleCheckboxChange(filter.name, e.target.checked)
                            }
                        />
                        {filter.label}
                    </label>
                </div>
            ))}
        </div>
    );
};

export default Filter;
