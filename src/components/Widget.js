import React from 'react';
import { useDashboard } from '../context/DashboardContext';

const Widget = ({ widget, categoryId }) => {
  const { removeWidget } = useDashboard();

  const handleRemove = () => {
    removeWidget(categoryId, widget.id);
  };

  return (
    <div className="widget">
      <div className="widget-header">
        <h3>{widget.name}</h3>
        <button className="remove-widget-btn" onClick={handleRemove}>
          ×
        </button>
      </div>
      <div className="widget-content">
        <p>{widget.text}</p>
      </div>
    </div>
  );
};

export default Widget;