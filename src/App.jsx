import React, { useState, useEffect, useCallback } from 'react';
import { Dices, RefreshCw, FileText, Printer, ChevronLeft, Download, FileJson } from 'lucide-react';
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

  const handleExportJSON = () => {
    if (!character) return;
    
    const dataStr = JSON.stringify(character, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    const exportFileDefaultName = `bite-the-bullet-character-${Date.now()}.json`;
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };

  const handleExportText = () => {
    if (!character) return;
    
    const textContent = `BITE THE BULLET - CHARACTER SHEET
Generated: ${new Date().toLocaleDateString()}

=== ATTRIBUTE SCORES ===
Vigor: ${character.attributes.vigor}
Presence: ${character.attributes.presence}  
Faith: ${character.attributes.faith}
Sand: ${character.attributes.sand}

Roll 3d6 for the first three; roll 2d6 for Sand.
To Save, roll d20 equal to or under the current attribute score.

=== CHARACTERISTICS ===
Background: ${character.characteristics.background.name}
  ${character.characteristics.background.desc}
  Rank: 1  Tapped: [ ]

Reputation: ${character.characteristics.reputation.name}
  ${character.characteristics.reputation.desc}
  Rank: 1  Tapped: [ ]

Fortitude: ${character.characteristics.fortitude.name}
  ${character.characteristics.fortitude.desc}
  Rank: 1  Tapped: [ ]

Foible: ${character.characteristics.foible.name}
  ${character.characteristics.foible.desc}
  Rank: 1  Tapped: [ ]

Issue: ${character.characteristics.issue.name}
  ${character.characteristics.issue.desc}
  Rank: 1  Tapped: [ ]

Each starts at Rank 1. Tap a characteristic to mitigate damage, 
increase damage, or as a Save bonus.

=== EQUIPMENT ===
Weapon: ${character.equipment.weapon.name}
  Slots: ${character.equipment.weapon.slots}
  Shots: ${character.equipment.weapon.shots || '-'}
  Damage: ${character.equipment.weapon.damage}
  Tags: ${character.equipment.weapon.traits}

Armor: ${character.equipment.armor.name}
  Slots: ${character.equipment.armor.slots}
  Protection: ${character.equipment.armor.armor}
  Type: Physical

Lead: ${character.equipment.lead}
Coin: ${character.equipment.coin}

Gear:
${character.equipment.gear.map((item, idx) => `  ${idx + 1}. ${item.name} (${item.slots} slots)`).join('\n')}

=== INVENTORY ===
Total Slots: ${character.inventory.total}
Load: ${character.inventory.load}
Reserve: ${character.inventory.reserve}

=== NOTES ===
[ ] 
[ ] 
[ ] 
[ ] 
[ ] 

"Every town is a candle against a vast dark"
`;
    
    const dataUri = 'data:text/plain;charset=utf-8,'+ encodeURIComponent(textContent);
    const exportFileDefaultName = `bite-the-bullet-character-${Date.now()}.txt`;
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };

  if (showSheet && character) {
    return (
      <div className="bg-gray-100 min-h-screen p-2 sm:p-4 print:p-0">
        <div className="max-w-4xl mx-auto mb-4 print:hidden">
          {/* Mobile-first button layout */}
          <div className="flex flex-col gap-2 sm:flex-row sm:justify-between sm:items-start">
            <button
              onClick={() => setShowSheet(false)}
              className="bg-gray-700 hover:bg-gray-600 focus:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400 text-white px-6 py-3 rounded-lg font-bold shadow-lg transition-all flex items-center justify-center gap-2 min-h-[48px] w-full sm:w-auto"
              aria-label="Go back to character overview"
            >
              <ChevronLeft size={20} aria-hidden="true" />
              Back
            </button>
            
            <div className="flex flex-col gap-2 sm:flex-row sm:gap-2">
              <button
                onClick={handleExportJSON}
                className="bg-green-600 hover:bg-green-700 focus:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 text-white px-4 py-3 rounded-lg font-bold shadow-lg transition-all flex items-center justify-center gap-2 min-h-[48px] w-full sm:w-auto text-sm"
                aria-label="Export character as JSON file"
              >
                <FileJson size={18} aria-hidden="true" />
                Export JSON
              </button>
              
              <button
                onClick={handleExportText}
                className="bg-purple-600 hover:bg-purple-700 focus:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-400 text-white px-4 py-3 rounded-lg font-bold shadow-lg transition-all flex items-center justify-center gap-2 min-h-[48px] w-full sm:w-auto text-sm"
                aria-label="Export character as text file"
              >
                <Download size={18} aria-hidden="true" />
                Export Text
              </button>
              
              <button
                onClick={handlePrint}
                className="bg-blue-600 hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 text-white px-4 py-3 rounded-lg font-bold shadow-lg transition-all flex items-center justify-center gap-2 min-h-[48px] w-full sm:w-auto text-sm"
                aria-label="Print character sheet"
              >
                <Printer size={18} aria-hidden="true" />
                Print Sheet
              </button>
            </div>
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

        <div className="flex flex-col gap-3 mb-6 sm:mb-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4">
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
          
          {character && (
            <div className="flex flex-col gap-2 sm:flex-row sm:justify-center sm:gap-4">
              <button
                onClick={handleExportJSON}
                className="bg-green-600 hover:bg-green-700 focus:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 text-white px-4 py-2 rounded-lg font-medium shadow-lg transition-all flex items-center justify-center gap-2 min-h-[44px] w-full sm:w-auto text-sm"
                aria-label="Export character as JSON file"
              >
                <FileJson size={16} aria-hidden="true" />
                Export JSON
              </button>
              
              <button
                onClick={handleExportText}
                className="bg-purple-600 hover:bg-purple-700 focus:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-400 text-white px-4 py-2 rounded-lg font-medium shadow-lg transition-all flex items-center justify-center gap-2 min-h-[44px] w-full sm:w-auto text-sm"
                aria-label="Export character as text file"
              >
                <Download size={16} aria-hidden="true" />
                Export Text
              </button>
            </div>
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