import React, { useState } from 'react';
import { Dices, RefreshCw, Download, FileText, Printer, ChevronLeft } from 'lucide-react';
import * as characterData from './data/characterData.js';
import { generate as generateNewCharacter } from './utils/characterGenerator.js';
import CharacterSheet from './components/CharacterSheet.jsx';
import CharacterQuickView from './components/CharacterQuickView.jsx';
import Welcome from './components/Welcome.jsx';




const App = () => {
  const [character, setCharacter] = useState(null);
  const [rolling, setRolling] = useState(false);
  const [showSheet, setShowSheet] = useState(false);

    const handleGenerateCharacter = () => {
    setRolling(true);
    setTimeout(() => {
      const newCharacter = generateNewCharacter();
      setCharacter(newCharacter);
      setRolling(false);
    }, 500);
  };

  const handleCharacterUpdate = (category, field, value) => {
    const newCharacter = { ...character };
    if (category) {
      newCharacter[category][field] = value;
    } else {
      newCharacter[field] = value;
    }
    setCharacter(newCharacter);
  };

  const handlePrint = () => {
    window.print();
  };

  if (showSheet && character) {
    return (
      <div className="bg-gray-100 min-h-screen p-4 print:p-0">
        <div className="max-w-4xl mx-auto mb-4 print:hidden flex justify-between">
          <button
            onClick={() => setShowSheet(false)}
            className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-2 rounded-lg font-bold shadow-lg transition-all flex items-center gap-2"
          >
            <ChevronLeft size={20} />
            Back
          </button>
          <button
            onClick={handlePrint}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-bold shadow-lg transition-all flex items-center gap-2"
          >
            <Printer size={20} />
            Print Sheet
          </button>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-8">
          <CharacterSheet character={character} />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brand-background text-brand-text font-sans p-4">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-5xl font-bold text-brand-primary drop-shadow-lg mb-2 font-serif">
            BITE the BULLET
          </h1>
          <p className="text-brand-text-muted text-lg italic">Character Generator</p>
        </header>

        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={handleGenerateCharacter}
            disabled={rolling}
            className="bg-brand-secondary hover:bg-brand-primary text-white px-6 py-3 rounded-lg font-bold shadow-lg transition-all disabled:opacity-50 flex items-center gap-2"
          >
            {rolling ? <RefreshCw className="animate-spin" /> : <Dices />}
            {character ? 'New Character' : 'Roll Character'}
          </button>
          {character && (
            <button
              onClick={() => setShowSheet(true)}
              className="bg-brand-surface hover:bg-gray-600 text-white px-6 py-3 rounded-lg font-bold shadow-lg transition-all flex items-center gap-2"
            >
              <FileText size={20} />
              Character Sheet
            </button>
          )}
        </div>

        {character && !showSheet && 
          <CharacterQuickView 
            character={character} 
            onUpdate={handleCharacterUpdate} 
            allData={characterData} 
          />
        }

        {!character && <Welcome />}
      </div>
    </div>
  );
};

export default App;