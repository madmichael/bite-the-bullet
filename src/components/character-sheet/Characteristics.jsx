import React from 'react';

const CharacteristicItem = ({ label, name }) => (
  <div className="border border-black p-2 bg-gray-50">
    <div className="flex justify-between items-center">
      <span className="text-xs uppercase tracking-wider text-gray-700">{label}</span>
      <span className="text-xs font-mono bg-gray-200 px-1 rounded">Rank: 1</span>
    </div>
    <div className="font-bold font-serif mt-1">{name}</div>
  </div>
);

const Characteristics = ({ characteristics }) => {
  return (
    <div className="mb-6">
      <h3 className="text-center font-bold mb-4 uppercase tracking-widest text-gray-800">Characteristics</h3>
      <div className="space-y-2">
        <CharacteristicItem label="Background" name={characteristics.background.name} />
        <CharacteristicItem label="Reputation" name={characteristics.reputation.name} />
        <CharacteristicItem label="Fortitude" name={characteristics.fortitude.name} />
        <CharacteristicItem label="Foible" name={characteristics.foible.name} />
        <CharacteristicItem label="Issue" name={characteristics.issue.name} />
      </div>
      <div className="text-xs text-center mt-4 text-gray-600">
        Each starts at Rank 1. Tap a characteristic to mitigate damage, increase damage, or as a Save bonus.
      </div>
    </div>
  );
};

export default Characteristics;
