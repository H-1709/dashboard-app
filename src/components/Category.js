import React from 'react';
import { useDashboard } from '../context/DashboardContext';
import Widget from './Widget';

const Category = ({ category }) => {
  const { openAddWidgetModal } = useDashboard();

  return (
    <div className="category">
      <div className="category-header">
        <h2>{category.name}</h2>
        <button 
          className="add-widget-btn"
          onClick={() => openAddWidgetModal(category.id)}
        >
          + Add Widget
        </button>
      </div>
      <div className="widgets">
        {category.widgets.map(widget => (
          <Widget 
            key={widget.id} 
            widget={widget} 
            categoryId={category.id} 
          />
        ))}
      </div>
    </div>
  );
};

export default Category;