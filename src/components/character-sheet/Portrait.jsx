import React, { useState } from 'react';

const Portrait = () => {
  const [notes, setNotes] = useState('');

  return (
    <div className="mb-6">
      <h3 className="text-center font-bold mb-4 uppercase tracking-widest text-gray-800">Description or Portrait</h3>
      <div className="border-2 border-black h-48 print:h-36 p-2 bg-gray-50">
        <textarea 
          className="w-full h-full resize-none outline-none bg-transparent font-serif"
          placeholder="Description, notes, or sketch..."
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Portrait;
