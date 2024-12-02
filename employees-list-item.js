import { useState, useEffect } from 'react';

const EmployeesListItem = ({ name, initialTaxRate, initialBonus, initialRate, onAddEmployee }) => {
    const [tax_rate, set_tax_rate] = useState(initialTaxRate || 19.5);
    const [bonus_amount, set_bonus_amount] = useState(initialBonus || 0);
    const [hourly_rate, set_hourly_rate] = useState(initialRate || 0);
    const [total_salary, set_total_salary] = useState(0);

    useEffect(() => {
        const base_salary = hourly_rate * 160;
        const tax_amount = base_salary * (tax_rate / 100);
        const calculated_salary = base_salary + bonus_amount - tax_amount;
        set_total_salary(calculated_salary.toFixed(2));
    }, [hourly_rate, bonus_amount, tax_rate]);

    const handleTaxRateChange = (e) => {
        set_tax_rate(parseFloat(e.target.value));
    };

    const handleBonusChange = (e) => {
        set_bonus_amount(parseFloat(e.target.value));
    };

    const handleRateChange = (e) => {
        set_hourly_rate(parseFloat(e.target.value));
    };

    const handleAddClick = () => {
        if (onAddEmployee) {
            onAddEmployee({ name, total_salary, bonus_amount, hourly_rate, tax_rate });
        }
    };

    let class_names = "list-group-item d-flex justify-content-between";
    if (total_salary > 0) {
        class_names += ' increase';
    }

    return (
        <li className={class_names}>
            <span className="list-group-item-label">{name}</span>
            <div className="list-group-item-tax">
                <label>Tax:</label>
                <input
                    type="number"
                    className="tax-rate-input"
                    value={tax_rate}
                    onChange={handleTaxRateChange}
                    min="0"
                    max="100"
                />%
            </div>
            <div className="list-group-item-bonus">
                <label>Bonus:</label>
                <input
                    type="number"
                    className="bonus-input"
                    value={bonus_amount}
                    onChange={handleBonusChange}
                    min="0"
                />
            </div>
            <div className="list-group-item-rate">
                <label>Hourly Rate ($/hr):</label>
                <input
                    type="number"
                    className="list-group-item-input"
                    value={hourly_rate}
                    onChange={handleRateChange}
                    min="0"
                />
            </div>
            <div className="list-group-item-salary">
                <label>Salary:</label>
                <input
                    type="text"
                    className="list-group-item-input"
                    value={total_salary}
                    readOnly
                />
            </div>
            <div className="d-flex justify-content-center align-items-center">
                <button type="button" className="btn-cookie btn-sm">
                    <i className="fas fa-cookie"></i>
                </button>
                <button type="button" className="btn-trash btn-sm">
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
            <button type="button" className="btn-add" onClick={handleAddClick}>
                Add
            </button>
        </li>
    );
};

export default EmployeesListItem;
