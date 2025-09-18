import React from 'react';

const Section = ({ title, children }) => (
  <div className="mb-2">
    <h3 className="text-center font-bold mb-2 uppercase tracking-widest text-gray-800">{title}</h3>
    {children}
  </div>
);

const Equipment = ({ weapon, armor }) => {
  return (
    <>
      <Section title="Weapons">
        {/* Mobile-first responsive design */}
        <div className="block sm:hidden">
          {/* Mobile card layout */}
          <div className="border border-black bg-gray-50 p-3 rounded">
            <h4 className="font-serif font-bold mb-2">{weapon.name}</h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div><span className="font-semibold">Slots:</span> {weapon.slots}</div>
              <div><span className="font-semibold">Shots:</span> {weapon.shots || '-'}</div>
              <div><span className="font-semibold">Damage:</span> {weapon.damage}</div>
              <div className="col-span-2"><span className="font-semibold">Tags:</span> {weapon.traits}</div>
            </div>
          </div>
        </div>
        
        {/* Desktop table layout */}
        <div className="hidden sm:block">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-gray-100 text-xs uppercase tracking-wider">
                <th className="border border-black p-2 print:py-0 text-left">Weapon</th>
                <th className="border border-black p-2 print:py-0 text-center">Slots</th>
                <th className="border border-black p-2 print:py-0 text-center">Shots</th>
                <th className="border border-black p-2 print:py-0 text-center">Damage</th>
                <th className="border border-black p-2 print:py-0 text-left">Tags</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-black p-2 print:py-0 font-serif print:text-[11px]">{weapon.name}</td>
                <td className="border border-black p-2 print:py-0 text-center">{weapon.slots}</td>
                <td className="border border-black p-2 print:py-0 text-center">{weapon.shots || '-'}</td>
                <td className="border border-black p-2 print:py-0 text-center">{weapon.damage}</td>
                <td className="border border-black p-2 print:py-0 text-xs whitespace-normal break-words leading-tight align-top print:text-[10px]">{weapon.traits}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>

      <Section title="Armor">
        {/* Mobile-first responsive design */}
        <div className="block sm:hidden">
          {/* Mobile card layout */}
          <div className="border border-black bg-gray-50 p-3 rounded">
            <h4 className="font-serif font-bold mb-2">{armor.name}</h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div><span className="font-semibold">Slots:</span> {armor.slots}</div>
              <div><span className="font-semibold">Protection:</span> {armor.armor}</div>
              <div className="col-span-2"><span className="font-semibold">Type:</span> Physical</div>
            </div>
          </div>
        </div>
        
        {/* Desktop table layout */}
        <div className="hidden sm:block">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-gray-100 text-xs uppercase tracking-wider">
                <th className="border border-black p-2 print:py-0 text-left">Armor</th>
                <th className="border border-black p-2 print:py-0 text-center">Slots</th>
                <th className="border border-black p-2 print:py-0 text-center">Protection</th>
                <th className="border border-black p-2 print:py-0 text-left">Type</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-black p-2 print:py-0 font-serif">{armor.name}</td>
                <td className="border border-black p-2 print:py-0 text-center">{armor.slots}</td>
                <td className="border border-black p-2 print:py-0 text-center">{armor.armor}</td>
                <td className="border border-black p-2 print:py-0 text-xs">Physical</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>
    </>
  );
};

export default Equipment;
