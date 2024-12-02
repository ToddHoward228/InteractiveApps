import React, { useState, useEffect } from "react";
import _ from "lodash";

const SearchComponent = ({ onSearch }) => {
    const [query, setQuery] = useState("");

    const debouncedSearch = _.debounce((searchTerm) => {
        onSearch(searchTerm);
    }, 500);

    useEffect(() => {
        if (query !== undefined) {
            debouncedSearch(query);
        }
        return () => {
            debouncedSearch.cancel();
        };
    }, [query]);

    return (
        <div>
            <input
                type="text"
                placeholder="Пошук..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
        </div>
    );
};

export default SearchComponent;
