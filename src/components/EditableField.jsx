import React from 'react';

const EditableField = ({ label, value, options, onUpdate, category, field }) => {
  const handleChange = (e) => {
    const selectedOption = options.find(option => option.name === e.target.value);
    onUpdate(category, field, selectedOption);
  };

  return (
    <div className="mb-2">
      <label className="text-brand-primary text-sm">{label}:</label>
      <select 
        value={value.name}
        onChange={handleChange}
        className="w-full bg-brand-surface border border-brand-secondary rounded-md p-1 text-brand-text text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent"
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
