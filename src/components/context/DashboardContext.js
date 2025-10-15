import React, { createContext, useState, useContext } from 'react';
import { initialCategories } from '../data/initialData';

const DashboardContext = createContext();

export const DashboardProvider = ({ children }) => {
  const [categories, setCategories] = useState(initialCategories);
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentCategory, setCurrentCategory] = useState(null);

  const addWidget = (categoryId, widgetName, widgetText) => {
    setCategories(prevCategories => 
      prevCategories.map(category => {
        if (category.id === categoryId) {
          const colors = ['#e3f2fd', '#e8f5e9', '#fff3e0', '#e0f2f1', '#fbe9e7', '#f3e5f5'];
          const randomColor = colors[Math.floor(Math.random() * colors.length)];
          
          const newWidget = {
            id: `widget${Date.now()}`,
            name: widgetName,
            text: widgetText,
            color: randomColor
          };
          
          return {
            ...category,
            widgets: [...category.widgets, newWidget]
          };
        }
        return category;
      })
    );
  };

  const removeWidget = (categoryId, widgetId) => {
    setCategories(prevCategories => 
      prevCategories.map(category => {
        if (category.id === categoryId) {
          return {
            ...category,
            widgets: category.widgets.filter(widget => widget.id !== widgetId)
          };
        }
        return category;
      })
    );
  };

  const openAddWidgetModal = (categoryId) => {
    setCurrentCategory(categoryId);
    setIsModalOpen(true);
  };

  const closeAddWidgetModal = () => {
    setIsModalOpen(false);
    setCurrentCategory(null);
  };

  const value = {
    categories,
    searchTerm,
    setSearchTerm,
    isModalOpen,
    currentCategory,
    addWidget,
    removeWidget,
    openAddWidgetModal,
    closeAddWidgetModal
  };

  return (
    <DashboardContext.Provider value={value}>
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboard = () => {
  return useContext(DashboardContext);
};