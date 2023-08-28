import React from 'react';

const EmployeeCard = ({ name, image, age, hourlySalary }) => {
  return (
    <div className="employee-card">
      <img src={image} alt={name} className="employee-image" />
      <div className="employee-details">
        <h3 className="employee-name">{name}</h3>
        <p className="employee-age">Age: {age}</p>
        <p className="employee-salary">Hourly Salary: {hourlySalary}</p>
      </div>
    </div>
  );
};

export default EmployeeCard;
 