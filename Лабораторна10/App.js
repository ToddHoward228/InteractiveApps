import React, { useState, useEffect } from "react";
import SearchComponent from "./components/Search";
import FilterComponent from "./components/Filter";

const App = () => {
    const [query, setQuery] = useState("");
    const [filters, setFilters] = useState([
        { name: "available", label: "Доступно", selected: false },
        { name: "discount", label: "Знижка", selected: false },
    ]);
    const [allData, setAllData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Імітація завантаження даних
        setAllData([
            { id: 1, name: "Товар 1", available: true, discount: false },
            { id: 2, name: "Товар 2", available: false, discount: true },
            { id: 3, name: "Товар 3", available: true, discount: true },
        ]);
        setFilteredData([
            { id: 1, name: "Товар 1", available: true, discount: false },
            { id: 2, name: "Товар 2", available: false, discount: true },
            { id: 3, name: "Товар 3", available: true, discount: true },
        ]);
    }, []);

    const handleSearch = async (searchQuery) => {
        setQuery(searchQuery);

        if (!searchQuery.trim()) {
            setFilteredData(allData);
            return;
        }

        try {
            const filtered = allData.filter((item) =>
                item.name.toLowerCase().includes(searchQuery.toLowerCase())
            );
            setFilteredData(filtered);
        } catch (err) {
            setError("Помилка виконання пошуку. Спробуйте ще раз.");
        }
    };

    const handleFilterChange = (filterName, value) => {
        const updatedFilters = filters.map((filter) =>
            filter.name === filterName ? { ...filter, selected: value } : filter
        );
        setFilters(updatedFilters);

        const activeFilters = updatedFilters
            .filter((filter) => filter.selected)
            .map((filter) => filter.name);

        const filtered = allData.filter((item) =>
            activeFilters.every((filter) => item[filter])
        );
        setFilteredData(filtered);
    };

    return (
        <div>
            <h1>Пошук та Фільтрація</h1>

            {error && <div style={{ color: "red" }}>{error}</div>}

            <SearchComponent onSearch={handleSearch} />
            <FilterComponent filters={filters} onFilterChange={handleFilterChange} />

            <div>
                <h2>Результати</h2>
                {filteredData.length > 0 ? (
                    filteredData.map((item) => <div key={item.id}>{item.name}</div>)
                ) : (
                    <div>Нічого не знайдено.</div>
                )}
            </div>
        </div>
    );
};

export default App;
