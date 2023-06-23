import React from 'react';
import './Notifications.css';

const NotificationsPanel = () => {
  // Dummy notifications data
  const notifications = [
    {
      id: 1,
      message: 'Your leave request has been approved',
      status: 'Approved',
      date: '2023-06-22',
    },
    {
      id: 2,
      message: 'Your leave request has been rejected',
      status: 'Rejected',
      date: '2023-06-21',
      reason: 'Insufficient leave balance',
    },
    {
      id: 2,
      message: 'Your leave request has been rejected',
      status: 'Rejected',
      date: '2023-06-21',
      reason: 'Meri Marzi',
    },
    
  ];

  return (
    <div className="notifications-panel-container">
      <h1 className="notifications-heading">Notifications</h1>

      <ul className="notifications-list">
        {notifications.map((notification) => (
          <li key={notification.id} className="notification-item">
            <div className="notification-message">{notification.message}</div>
            <div className="notification-date">{notification.date}</div>
            {notification.status === 'Rejected' && (
              <div className="notification-reason">{notification.reason}</div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotificationsPanel;
