import React, { useState } from 'react';
import AttributeScores from './character-sheet/AttributeScores';
import Characteristics from './character-sheet/Characteristics';
import Equipment from './character-sheet/Equipment';
import Portrait from './character-sheet/Portrait';
import Inventory from './character-sheet/Inventory';
import SheetHeader from './character-sheet/SheetHeader';

const CharacterSheet = ({ character }) => {
  if (!character) return null;


  return (
    <div className="max-w-4xl mx-auto bg-white text-black p-8 print:p-4 shadow-2xl font-mono">
      <SheetHeader />

      <div className="grid grid-cols-1 md:grid-cols-2 print:grid-cols-2 gap-8 print:gap-4">
        {/* Left Column */}
        <div>
          <AttributeScores attributes={character.attributes} />

          <Characteristics characteristics={character.characteristics} />

          <Equipment weapon={character.equipment.weapon} armor={character.equipment.armor} />
        </div>

        {/* Right Column */}
        <div>
          <Portrait />

          <Inventory equipment={character.equipment} inventory={character.inventory} />
        </div>
      </div>
    </div>
  );
};

export default CharacterSheet;
