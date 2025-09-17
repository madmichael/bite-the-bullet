import React from 'react';

const Section = ({ title, children }) => (
  <div className="mb-6">
    <h3 className="text-center font-bold mb-4 uppercase tracking-widest text-gray-800">{title}</h3>
    {children}
  </div>
);

const Equipment = ({ weapon, armor }) => {
  return (
    <>
      <Section title="Weapons">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100 text-xs uppercase tracking-wider">
              <th className="border border-black p-2">Weapon</th>
              <th className="border border-black p-2">Slots</th>
              <th className="border border-black p-2">Shots</th>
              <th className="border border-black p-2">Damage</th>
              <th className="border border-black p-2">Tags</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-black p-2 font-serif">{weapon.name}</td>
              <td className="border border-black p-2 text-center">{weapon.slots}</td>
              <td className="border border-black p-2 text-center">{weapon.shots || '-'}</td>
              <td className="border border-black p-2 text-center">{weapon.damage}</td>
              <td className="border border-black p-2 text-xs">{weapon.traits}</td>
            </tr>
          </tbody>
        </table>
      </Section>

      <Section title="Armor">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100 text-xs uppercase tracking-wider">
              <th className="border border-black p-2">Armor</th>
              <th className="border border-black p-2">Slots</th>
              <th className="border border-black p-2">Protection</th>
              <th className="border border-black p-2">Type</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-black p-2 font-serif">{armor.name}</td>
              <td className="border border-black p-2 text-center">{armor.slots}</td>
              <td className="border border-black p-2 text-center">{armor.armor}</td>
              <td className="border border-black p-2 text-xs">Physical</td>
            </tr>
          </tbody>
        </table>
      </Section>
    </>
  );
};

export default Equipment;
