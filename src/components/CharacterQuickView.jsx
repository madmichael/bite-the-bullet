import React from 'react';

const CharacterQuickView = ({ character }) => {
  if (!character) return null;

  return (
    <div className="bg-brand-surface/50 backdrop-blur rounded-lg border-2 border-brand-secondary text-brand-text p-6">
      <h2 className="text-2xl font-bold text-brand-primary mb-4">Generated Character</h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-brand-accent font-bold mb-2">Attributes</h3>
          <div className="space-y-1">
            <div>Vigor: {character.attributes.vigor}</div>
            <div>Presence: {character.attributes.presence}</div>
            <div>Faith: {character.attributes.faith}</div>
            <div>Sand: {character.attributes.sand}</div>
          </div>

          <h3 className="text-brand-accent font-bold mt-4 mb-2">Equipment</h3>
          <div className="space-y-1 text-sm">
            <div>Armor: {character.equipment.armor.name}</div>
            <div>Weapon: {character.equipment.weapon.name}</div>
            <div>Lead: {character.equipment.lead}, Coin: {character.equipment.coin}</div>
          </div>

          <h3 className="text-brand-accent font-bold mt-4 mb-2">Inventory</h3>
          <div className="space-y-1 text-sm">
            <div>Total: {character.inventory.total}</div>
            <div>Load: {character.inventory.load}</div>
            <div>Reserve: {character.inventory.reserve}</div>
          </div>
        </div>

        <div>
          <h3 className="text-brand-accent font-bold mb-2">Characteristics</h3>
          <div className="space-y-2 text-sm">
            <div><span className="text-brand-primary">Background:</span> {character.characteristics.background.name}</div>
            <div><span className="text-brand-primary">Reputation:</span> {character.characteristics.reputation.name}</div>
            <div><span className="text-brand-primary">Fortitude:</span> {character.characteristics.fortitude.name}</div>
            <div><span className="text-brand-primary">Foible:</span> {character.characteristics.foible.name}</div>
            <div><span className="text-brand-primary">Issue:</span> {character.characteristics.issue.name}</div>
          </div>

          <h3 className="text-brand-accent font-bold mt-4 mb-2">Gear</h3>
          <ul className="space-y-1 text-sm">
            {character.equipment.gear.map((item, idx) => (
              <li key={idx}>• {item.name} ({item.slots} slots)</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-6 text-center text-brand-text-muted">
        <p>Click "Character Sheet" to view and print the full character sheet</p>
      </div>
    </div>
  );
};

export default CharacterQuickView;
