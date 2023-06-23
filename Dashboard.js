import React, { useState } from 'react';
import './dashboardnew.css';

const EmployeeDashboard = () => {
  const [leaveType, setLeaveType] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [fromTimeSlot, setFromTimeSlot] = useState('');
  const [toTimeSlot, setToTimeSlot] = useState('');
  const [reason, setReason] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Perform leave application submission logic here

    // Reset form fields
    setLeaveType('');
    setFromDate('');
    setToDate('');
    setFromTimeSlot('');
    setToTimeSlot('');
    setReason('');
  };

  return (
    <div className="dashboard-container">
      <h1 className="welcome-heading">Welcome, Employee Name</h1>

      <form className="leave-form" onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label htmlFor="leaveType">Leave Type:</label>
          <select
            id="leaveType"
            className="form-control"
            value={leaveType}
            onChange={(e) => setLeaveType(e.target.value)}
          >
            <option value="">Select Leave Type</option>
            <option value="casual">Casual Leave</option>
            <option value="maternity">Maternity leave</option>
            <option value="paternity">Paternity leave</option>
            <option value="emergency">Emergency leave</option>
            <option value="sabbatical">Sabbatical leave</option>
            <option value="sandwich">Sandwich leave</option>
            <option value="sick">Sick Leave</option>
            {/* Add more leave type options */}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="fromDate">From:</label>
          <input
            type="date"
            id="fromDate"
            className="form-control"
            value={fromDate}
            onChange={(e) => setFromDate(e.target.value)}
          />
          <div className="time-slot-group">
            <label>
              <input
                type="radio"
                value="morning"
                checked={fromTimeSlot === 'morning'}
                onChange={(e) => setFromTimeSlot(e.target.value)}
              />{' '}
              Morning
            </label>
            <label>
              <input
                type="radio"
                value="afternoon"
                checked={fromTimeSlot === 'afternoon'}
                onChange={(e) => setFromTimeSlot(e.target.value)}
              />{' '}
              Afternoon
            </label>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="toDate">To:</label>
          <input
            type="date"
            id="toDate"
            className="form-control"
            value={toDate}
            onChange={(e) => setToDate(e.target.value)}
          />
          <div className="time-slot-group">
            <label>
              <input
                type="radio"
                value="morning"
                checked={toTimeSlot === 'morning'}
                onChange={(e) => setToTimeSlot(e.target.value)}
              />{' '}
              Morning
            </label>
            <label>
              <input
                type="radio"
                value="afternoon"
                checked={toTimeSlot === 'afternoon'}
                onChange={(e) => setToTimeSlot(e.target.value)}
              />{' '}
              Afternoon
            </label>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="reason">Reason for Leave:</label>
          <textarea
            id="reason"
            className="form-control"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            placeholder="Enter reason for leave"
          ></textarea>
        </div>

        {/* Rest of the form fields */}

        <button type="submit" className="submit-button">
          Apply Leave
        </button>
      </form>
    </div>
  );
};

const HRDashboard = () => {
  // Dummy data for employees on leave
  const employeesOnLeave = [
    {
      employeeName: 'John Doe',
      leaveType: 'Annual Leave',
      numberOfDays: 5,
      startingDate: '2023-06-01',
      department: 'Sales',
      reason: 'Vacation',
    },
    {
      employeeName: 'Jane Smith',
      leaveType: 'Sick Leave',
      numberOfDays: 3,
      startingDate: '2023-06-10',
      department: 'Marketing',
      reason: 'Flu',
    },
    {
      employeeName: 'Mike Johnson',
      leaveType: 'Casual Leave',
      numberOfDays: 2,
      startingDate: '2023-06-15',
      department: 'Finance',
      reason: 'Personal',
    },
    // Add more employee leave entries
  ];

  return (
    <div className="dashboard-container">
      <h1 className="welcome-heading">Welcome Back, HR (Name)</h1>

      <h2 className="table-heading">Current Employees on Leave</h2>

      <table className="leave-table">
        <thead>
          <tr>
            <th>Employee Name</th>
            <th>Leave Type</th>
            <th>Number of Days</th>
            <th>Starting Date</th>
            <th>Department</th>
            <th>Reason of Leave</th>
          </tr>
        </thead>
        <tbody>
          {employeesOnLeave.map((employee, index) => (
            <tr key={index}>
              <td>{employee.employeeName}</td>
              <td>{employee.leaveType}</td>
              <td>{employee.numberOfDays}</td>
              <td>{employee.startingDate}</td>
              <td>{employee.department}</td>
              <td>{employee.reason}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const Dashboard = () => {
  const [isEmployeeDashboardVisible, setEmployeeDashboardVisible] = useState(true);

  const handleEmployeeLogin = () => {
    setEmployeeDashboardVisible(true);
  };

  const handleHRLogin = () => {
    setEmployeeDashboardVisible(false);
  };

  return (
    <div>
      <div className="login-buttons">
        <button onClick={handleEmployeeLogin}>Employee Dashboard</button>
        <button onClick={handleHRLogin}>HR Dashboard</button>
      </div>

      {isEmployeeDashboardVisible ? <EmployeeDashboard /> : <HRDashboard />}
    </div>
  );
};

export default Dashboard;
