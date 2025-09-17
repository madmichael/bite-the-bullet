import React, { useState } from 'react';

const SheetHeader = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  return (
    <div className="flex justify-between items-baseline mb-6">
      <div className="flex-1">
        <div className="flex gap-4 mb-2">
          <div className="flex-1">
            <label className="text-xs uppercase tracking-wider text-gray-700">Name</label>
            <input 
              type="text" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border-b-2 border-black p-1 bg-transparent font-serif text-lg"
              placeholder="Enter name..."
            />
          </div>
          <div className="w-24">
            <label className="text-xs uppercase tracking-wider text-gray-700">Age</label>
            <input 
              type="text" 
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="w-full border-b-2 border-black p-1 bg-transparent font-serif text-lg"
              placeholder="..."
            />
          </div>
        </div>
      </div>
      <div className="text-center ml-8">
        <div className="text-3xl font-bold font-serif">BITE the BULLET</div>
      </div>
    </div>
  );
};

export default SheetHeader;
