import { useState } from 'react';

const EmployeesAddForm = ({ onAddEmployee }) => {
    const [full_name, setFullName] = useState('');
    const [hourly_rate, setHourlyRate] = useState('');
    const [tax_percentage, setTaxPercentage] = useState('');
    const [extra_bonus, setExtraBonus] = useState('');

    const handleNameChange = (e) => {
        setFullName(e.target.value);
    };

    const handleRateChange = (e) => {
        setHourlyRate(e.target.value);
    };

    const handleTaxRateChange = (e) => {
        setTaxPercentage(parseFloat(e.target.value));
    };

    const handleBonusChange = (e) => {
        setExtraBonus(parseFloat(e.target.value));
    };

    const calculateSalary = () => {
        const base_salary = hourly_rate ? hourly_rate * 160 : 0;
        const tax_amount = base_salary * (tax_percentage ? tax_percentage / 100 : 0);
        const total_salary =
            base_salary + (extra_bonus ? parseFloat(extra_bonus) : 0) - tax_amount;
        return total_salary.toFixed(2);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (full_name && hourly_rate && tax_percentage !== '' && extra_bonus !== '') {
            const total_salary = calculateSalary();
            console.log(`Added employee: ${full_name}, Salary: ${total_salary}`);
            if (onAddEmployee) {
                onAddEmployee({
                    name: full_name,
                    salary: total_salary,
                    bonus: extra_bonus || 0,
                    rate: hourly_rate || 0,
                    taxRate: tax_percentage || 0.195,
                });
            }
            setFullName('');
            setHourlyRate('');
            setTaxPercentage('');
            setExtraBonus('');
        } else {
            alert('Please fill out all fields!');
        }
    };

    return (
        <div className="app-add-form">
            <h3>Add a new employee</h3>
            <form className="add-form d-flex" onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="form-control new-post-label"
                    placeholder="Full Name"
                    value={full_name}
                    onChange={handleNameChange}
                />
                <input
                    type="number"
                    className="form-control new-post-label"
                    placeholder="Hourly Rate ($/hr)"
                    value={hourly_rate}
                    onChange={handleRateChange}
                />
                <input
                    type="number"
                    className="form-control new-post-label"
                    placeholder="Bonus"
                    value={extra_bonus}
                    onChange={handleBonusChange}
                />
                <input
                    type="number"
                    className="form-control new-post-label"
                    placeholder="Tax Percentage"
                    value={tax_percentage}
                    onChange={handleTaxRateChange}
                />
                <button type="submit" className="btn btn-outlinelight">Add</button>
            </form>
        </div>
    );
};

export default EmployeesAddForm;
