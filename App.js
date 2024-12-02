import { useState } from 'react';
import AppInfo from './component/app-info';
import SearchPanel from './component/search-panel';
import AppFilter from './component/app-filter';
import EmployeesList from './component/employees-list';
import EmployeesAddForm from './component/employees-add-form';
import "./App.css"


function App() {
    const [data, setData] = useState([
        {
            name: 'John C.', salary: 800, increase: false, taxRate: 19.5, bonus:
                100, rate: 10
        },
        {
            name: 'Alex M.', salary: 3000, increase: true, taxRate: 19.5, bonus:
                200, rate: 20
        },
        {
            name: 'Carl W.', salary: 5000, increase: false, taxRate: 19.5, bonus:
                300, rate: 25
        }
    ]);
    const addEmployee = (newEmployee) => {
        setData((prevData) => [...prevData, newEmployee]);
    };
    return (
        <div className="app">
            <AppInfo />
            <div className="search-panel">
                <SearchPanel />
                <AppFilter />
            </div>
            <EmployeesList data={data} />
            <EmployeesAddForm onAddEmployee={addEmployee} />

        </div>
    );
}

export default App;
