import React, { useState, useEffect, useCallback } from 'react';
import { Dices, RefreshCw, FileText, Printer, ChevronLeft } from 'lucide-react';
import * as characterData from './data/characterData.js';
import { generate as generateNewCharacter } from './utils/characterGenerator.js';
import CharacterSheet from './components/CharacterSheet.jsx';
import CharacterQuickView from './components/CharacterQuickView.jsx';
import Welcome from './components/Welcome.jsx';

const App = () => {
  const [character, setCharacter] = useState(null);
  const [rolling, setRolling] = useState(false);
  const [showSheet, setShowSheet] = useState(false);

  const handleGenerateCharacter = useCallback(() => {
    setRolling(true);
  }, []);

  useEffect(() => {
    if (rolling) {
      const timer = setTimeout(() => {
        try {
          const newCharacter = generateNewCharacter();
          setCharacter(newCharacter);
        } catch (error) {
          console.error('Error generating character:', error);
          // Could add error state here for user feedback
        } finally {
          setRolling(false);
        }
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [rolling]);

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
      <div className="bg-gray-100 min-h-screen p-2 sm:p-4 print:p-0">
        <div className="max-w-4xl mx-auto mb-4 print:hidden">
          {/* Mobile-first button layout */}
          <div className="flex flex-col gap-2 sm:flex-row sm:justify-between">
            <button
              onClick={() => setShowSheet(false)}
              className="bg-gray-700 hover:bg-gray-600 focus:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400 text-white px-6 py-3 rounded-lg font-bold shadow-lg transition-all flex items-center justify-center gap-2 min-h-[48px] w-full sm:w-auto"
              aria-label="Go back to character overview"
            >
              <ChevronLeft size={20} aria-hidden="true" />
              Back
            </button>
            <button
              onClick={handlePrint}
              className="bg-blue-600 hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 text-white px-6 py-3 rounded-lg font-bold shadow-lg transition-all flex items-center justify-center gap-2 min-h-[48px] w-full sm:w-auto"
              aria-label="Print character sheet"
            >
              <Printer size={20} aria-hidden="true" />
              Print Sheet
            </button>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-4 sm:p-8">
          <CharacterSheet character={character} />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brand-background text-brand-text font-sans p-2 sm:p-4">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-6 sm:mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-primary drop-shadow-lg mb-2 font-serif">
            BITE the BULLET
          </h1>
          <p className="text-brand-text-muted text-base sm:text-lg italic">Character Generator</p>
        </header>

        <div className="flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4 mb-6 sm:mb-8">
          <button
            onClick={handleGenerateCharacter}
            disabled={rolling}
            className="bg-brand-secondary hover:bg-brand-primary focus:bg-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-accent text-white px-6 py-3 rounded-lg font-bold shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 min-h-[48px] w-full sm:w-auto"
            aria-label={character ? 'Generate new character' : 'Generate first character'}
          >
            {rolling ? (
              <RefreshCw className="animate-spin" size={20} aria-hidden="true" />
            ) : (
              <Dices size={20} aria-hidden="true" />
            )}
            {character ? 'New Character' : 'Roll Character'}
          </button>
          {character && (
            <button
              onClick={() => setShowSheet(true)}
              className="bg-brand-surface hover:bg-gray-600 focus:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400 text-white px-6 py-3 rounded-lg font-bold shadow-lg transition-all flex items-center justify-center gap-2 min-h-[48px] w-full sm:w-auto"
              aria-label="View detailed character sheet"
            >
              <FileText size={20} aria-hidden="true" />
              Character Sheet
            </button>
          )}
        </div>

        <main>
          {character && !showSheet && (
            <CharacterQuickView 
              character={character} 
              onUpdate={handleCharacterUpdate} 
              allData={characterData} 
            />
          )}

          {!character && <Welcome />}
        </main>
      </div>
    </div>
  );
};

export default App;