import React from 'react';

const EditableField = ({ label, value, options, onUpdate, category, field }) => {
  const handleChange = (e) => {
    const selectedOption = options.find(option => option.name === e.target.value);
    onUpdate(category, field, selectedOption);
  };

  const fieldId = `${category}-${field}-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className="space-y-1">
      <label 
        htmlFor={fieldId}
        className="block text-brand-primary text-sm font-medium"
      >
        {label}:
      </label>
      <select 
        id={fieldId}
        value={value?.name || ''}
        onChange={handleChange}
        className="w-full bg-brand-surface border border-brand-secondary rounded-md p-2 text-brand-text text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-brand-accent transition-colors min-h-[44px]"
        aria-label={`Select ${label.toLowerCase()}`}
      >
        {options.map(option => (
          <option key={option.name} value={option.name}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default EditableField;
