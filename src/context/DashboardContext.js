import React, { createContext, useState, useContext } from 'react';

const DashboardContext = createContext();

export const DashboardProvider = ({ children }) => {
  const [categories, setCategories] = useState([
    {
      id: 'category1',
      name: 'CSPM Executive Dashboard',
      widgets: [
        {
          id: 'widget1',
          name: 'Cloud Accounts',
          text: 'Random text for Cloud Accounts widget'
        },
        {
          id: 'widget2',
          name: 'Cloud Risk Assessment',
          text: 'Random text for Cloud Risk Assessment widget'
        }
      ]
    },
    {
      id: 'category2',
      name: 'CWPP Dashboard',
      widgets: [
        {
          id: 'widget3',
          name: 'Container Security',
          text: 'Random text for Container Security widget'
        }
      ]
    }
  ]);
  
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentCategory, setCurrentCategory] = useState(null);

  const addWidget = (categoryId, widgetName, widgetText) => {
    setCategories(prevCategories => 
      prevCategories.map(category => {
        if (category.id === categoryId) {
          const newWidget = {
            id: `widget${Date.now()}`,
            name: widgetName,
            text: widgetText
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