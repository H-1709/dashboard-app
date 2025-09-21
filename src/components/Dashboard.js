import React from 'react';
import { useDashboard } from '../context/DashboardContext';
import Category from './Category';
import SearchBar from './SearchBar';
import AddWidgetModal from './AddWidgetModal';

const Dashboard = () => {
  const { categories, searchTerm } = useDashboard();

  // Filter categories and widgets based on search term
  const filteredCategories = categories.map(category => {
    const filteredWidgets = category.widgets.filter(widget => 
      widget.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      widget.text.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    return {
      ...category,
      widgets: filteredWidgets
    };
  }).filter(category => category.widgets.length > 0);

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Security Dashboard</h1>
        <SearchBar />
      </div>
      
      <div className="dashboard-grid">
        {filteredCategories.map(category => (
          <Category key={category.id} category={category} />
        ))}
      </div>
      
      <AddWidgetModal />
    </div>
  );
};

export default Dashboard;