import React from 'react';
import EditableField from './EditableField';

const CharacterQuickView = ({ character, onUpdate, allData }) => {
  if (!character) return null;

  return (
    <div className="bg-brand-surface/50 backdrop-blur rounded-lg border-2 border-brand-secondary text-brand-text p-4 sm:p-6">
      <h2 className="text-xl sm:text-2xl font-bold text-brand-primary mb-4">Generated Character</h2>
      
      <div className="space-y-6 lg:grid lg:grid-cols-2 lg:gap-6 lg:space-y-0">
        <div>
          <h3 className="text-brand-accent font-bold mb-3 text-lg">Attributes</h3>
          <div className="grid grid-cols-2 gap-2 sm:space-y-1 sm:grid-cols-1">
            <div className="bg-brand-surface/30 p-2 rounded">
              <span className="font-semibold">Vigor:</span> {character.attributes.vigor}
            </div>
            <div className="bg-brand-surface/30 p-2 rounded">
              <span className="font-semibold">Presence:</span> {character.attributes.presence}
            </div>
            <div className="bg-brand-surface/30 p-2 rounded">
              <span className="font-semibold">Faith:</span> {character.attributes.faith}
            </div>
            <div className="bg-brand-surface/30 p-2 rounded">
              <span className="font-semibold">Sand:</span> {character.attributes.sand}
            </div>
          </div>

          <h3 className="text-brand-accent font-bold mt-6 mb-3 text-lg">Equipment</h3>
          <div className="space-y-3">
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
            <div className="bg-brand-surface/30 p-3 rounded">
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div><span className="font-semibold">Lead:</span> {character.equipment.lead}</div>
                <div><span className="font-semibold">Coin:</span> {character.equipment.coin}</div>
              </div>
            </div>
          </div>

          <h3 className="text-brand-accent font-bold mt-6 mb-3 text-lg">Inventory</h3>
          <div className="bg-brand-surface/30 p-3 rounded">
            <div className="grid grid-cols-3 gap-2 text-sm">
              <div><span className="font-semibold">Total:</span> {character.inventory.total}</div>
              <div><span className="font-semibold">Load:</span> {character.inventory.load}</div>
              <div><span className="font-semibold">Reserve:</span> {character.inventory.reserve}</div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-brand-accent font-bold mb-3 text-lg">Characteristics</h3>
          <div className="space-y-3">
            <EditableField 
              label="Background" 
              value={character.characteristics.background} 
              options={allData.backgrounds} 
              onUpdate={onUpdate} 
              category="characteristics" 
              field="background" 
            />
            <EditableField 
              label="Reputation" 
              value={character.characteristics.reputation} 
              options={allData.reputations} 
              onUpdate={onUpdate} 
              category="characteristics" 
              field="reputation" 
            />
            <EditableField 
              label="Fortitude" 
              value={character.characteristics.fortitude} 
              options={allData.fortitudes} 
              onUpdate={onUpdate} 
              category="characteristics" 
              field="fortitude" 
            />
            <EditableField 
              label="Foible" 
              value={character.characteristics.foible} 
              options={allData.foibles} 
              onUpdate={onUpdate} 
              category="characteristics" 
              field="foible" 
            />
            <EditableField 
              label="Issue" 
              value={character.characteristics.issue} 
              options={allData.issues} 
              onUpdate={onUpdate} 
              category="characteristics" 
              field="issue" 
            />
          </div>

          <h3 className="text-brand-accent font-bold mt-6 mb-3 text-lg">Gear</h3>
          <div className="space-y-3">
            {character.equipment.gear.map((item, idx) => (
              <EditableField 
                key={`gear-${idx}`}
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

      <div className="mt-8 text-center text-brand-text-muted">
        <p className="text-sm sm:text-base">Click "Character Sheet" to view and print the full character sheet</p>
      </div>
    </div>
  );
};

export default CharacterQuickView;
