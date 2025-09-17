import React from 'react';
import EditableField from './EditableField';

const CharacterQuickView = ({ character, onUpdate, allData }) => {
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
          <div className="space-y-2 text-sm">
            <EditableField 
              label="Armor"
              value={character.equipment.armor}
              options={allData.armors}
              onUpdate={onUpdate}
              category="equipment"
              field="armor"
            />
            <EditableField 
              label="Weapon"
              value={character.equipment.weapon}
              options={allData.weapons}
              onUpdate={onUpdate}
              category="equipment"
              field="weapon"
            />
            <div className="pt-2">Lead: {character.equipment.lead}, Coin: {character.equipment.coin}</div>
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
            <EditableField label="Background" value={character.characteristics.background} options={allData.backgrounds} onUpdate={onUpdate} category="characteristics" field="background" />
            <EditableField label="Reputation" value={character.characteristics.reputation} options={allData.reputations} onUpdate={onUpdate} category="characteristics" field="reputation" />
            <EditableField label="Fortitude" value={character.characteristics.fortitude} options={allData.fortitudes} onUpdate={onUpdate} category="characteristics" field="fortitude" />
            <EditableField label="Foible" value={character.characteristics.foible} options={allData.foibles} onUpdate={onUpdate} category="characteristics" field="foible" />
            <EditableField label="Issue" value={character.characteristics.issue} options={allData.issues} onUpdate={onUpdate} category="characteristics" field="issue" />
          </div>

          <h3 className="text-brand-accent font-bold mt-4 mb-2">Gear</h3>
          <div className="space-y-2 text-sm">
            {character.equipment.gear.map((item, idx) => (
              <EditableField 
                key={idx}
                label={`Gear ${idx + 1}`}
                value={item}
                options={allData.gear}
                onUpdate={(category, field, value) => {
                  const newGear = [...character.equipment.gear];
                  newGear[idx] = value;
                  onUpdate('equipment', 'gear', newGear);
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 text-center text-brand-text-muted">
        <p>Click "Character Sheet" to view and print the full character sheet</p>
      </div>
    </div>
  );
};

export default CharacterQuickView;
