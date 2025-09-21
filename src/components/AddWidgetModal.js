import React, { useState } from 'react';
import { useDashboard } from '../context/DashboardContext';

const AddWidgetModal = () => {
  const { 
    isModalOpen, 
    closeAddWidgetModal, 
    currentCategory, 
    addWidget 
  } = useDashboard();
  
  const [widgetName, setWidgetName] = useState('');
  const [widgetText, setWidgetText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (widgetName.trim() && widgetText.trim() && currentCategory) {
      addWidget(currentCategory, widgetName, widgetText);
      setWidgetName('');
      setWidgetText('');
      closeAddWidgetModal();
    }
  };

  if (!isModalOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <h2>Add New Widget</h2>
          <button className="close-modal-btn" onClick={closeAddWidgetModal}>
            ×
          </button>
        </div>
        <form onSubmit={handleSubmit} className="add-widget-form">
          <div className="form-group">
            <label htmlFor="widget-name">Widget Name</label>
            <input
              type="text"
              id="widget-name"
              value={widgetName}
              onChange={(e) => setWidgetName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="widget-text">Widget Text</label>
            <textarea
              id="widget-text"
              value={widgetText}
              onChange={(e) => setWidgetText(e.target.value)}
              required
            ></textarea>
          </div>
          <div className="form-actions">
            <button type="submit" className="submit-btn">
              Add Widget
            </button>
            <button 
              type="button" 
              className="cancel-btn"
              onClick={closeAddWidgetModal}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddWidgetModal;