import React from 'react';

const CharacteristicItem = ({ label, name, desc }) => (
  <div className="border border-black p-2 bg-gray-50 flex items-center gap-3">
    <div className="flex-1">
      <div className="flex justify-between items-center">
        <span className="text-xs uppercase tracking-wider text-gray-700">{label}</span>
        <span className="text-xs font-mono bg-gray-200 px-1 rounded">Rank: 1</span>
      </div>
      <div className="font-bold font-serif mt-1">{name}</div>
      <div className="text-xs text-gray-600 mt-1 italic leading-tight">{desc}</div>
    </div>
    <div className="flex flex-col items-center gap-1 min-w-[60px]">
      <span className="text-xs text-gray-600 uppercase tracking-wider">Tapped</span>
      <div className="w-5 h-5 border-2 border-black bg-white"></div>
    </div>
  </div>
);

const Characteristics = ({ characteristics }) => {
  return (
    <div className="mb-2">
      <h3 className="text-center font-bold mb-2 uppercase tracking-widest text-gray-800">Characteristics</h3>
      <div className="space-y-2">
        <CharacteristicItem 
          label="Background" 
          name={characteristics.background.name} 
          desc={characteristics.background.desc} 
        />
        <CharacteristicItem 
          label="Reputation" 
          name={characteristics.reputation.name} 
          desc={characteristics.reputation.desc} 
        />
        <CharacteristicItem 
          label="Fortitude" 
          name={characteristics.fortitude.name} 
          desc={characteristics.fortitude.desc} 
        />
        <CharacteristicItem 
          label="Foible" 
          name={characteristics.foible.name} 
          desc={characteristics.foible.desc} 
        />
        <CharacteristicItem 
          label="Issue" 
          name={characteristics.issue.name} 
          desc={characteristics.issue.desc} 
        />
      </div>
      <div className="text-xs print:text-[8px] print:leading-tight text-center mt-4 text-gray-600">
        Each starts at Rank 1. Tap a characteristic to mitigate damage, increase damage, or as a Save bonus.
      </div>
    </div>
  );
};

export default Characteristics;
