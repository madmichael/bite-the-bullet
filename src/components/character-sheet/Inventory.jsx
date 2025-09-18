import React from 'react';

const Inventory = ({ equipment, inventory }) => {
  const inventoryItems = [];
  equipment.gear.forEach(item => {
    inventoryItems.push({ name: item.name, slots: item.slots });
  });
  if (equipment.lead > 0) {
    inventoryItems.push({ name: `Lead (${equipment.lead})`, slots: 1 });
  }

  // Fill empty slots up to 16
  while (inventoryItems.length < 16) {
    inventoryItems.push({ name: '', slots: 0 });
  }

  return (
    <div className="mb-6">
      <h3 className="text-center font-bold mb-2 uppercase tracking-widest text-gray-800">Inventory</h3>
      <table className="w-full border-collapse mb-4 print:mb-2 text-sm print:text-xs">
        <thead>
          <tr className="bg-gray-100 text-xs uppercase tracking-wider">
            <th className="border border-black p-2 print:py-px text-left">Item</th>
            <th className="border border-black p-2 print:py-px w-16">Slots</th>
          </tr>
        </thead>
        <tbody>
          {inventoryItems.map((item, idx) => (
            <tr key={idx} className="bg-gray-50">
              <td className="border border-black p-2 print:py-[0.1rem] font-serif">
                {idx + 1}. {item.name}
              </td>
              <td className="border border-black p-2 print:py-[0.1rem] text-center">
                {item.slots > 0 ? item.slots : ''}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
      <div className="flex justify-around text-center">
        <div>
          <div className="text-xs uppercase tracking-wider text-gray-700">Max carry</div>
          <div className="border border-black w-16 p-1 mx-auto mt-1 bg-gray-100 font-serif font-bold">
            {inventory.total}
          </div>
        </div>
        <div>
          <div className="text-xs uppercase tracking-wider text-gray-700">Load</div>
          <div className="border border-black w-16 p-1 mx-auto mt-1 bg-gray-100 font-serif font-bold">
            {inventory.load}
          </div>
        </div>
        <div>
          <div className="text-xs uppercase tracking-wider text-gray-700">Reserve</div>
          <div className="border border-black w-16 p-1 mx-auto mt-1 bg-gray-100 font-serif font-bold">
            {inventory.reserve}
          </div>
        </div>
      </div>
      
      <div className="text-xs text-center mt-4 print:mt-2 text-gray-600">
        Max carry is equal to Vigor (minimum 10). Load is all slots carried. 
        Reserve is max carry minus load. Use Reserve to power Acts of Faith.
      </div>

      <div className="text-center mt-4 print:mt-2">
        <span className="font-bold uppercase text-xs tracking-wider">Coin: </span>
        <span className="font-serif font-bold">{equipment.coin}</span>
      </div>
    </div>
  );
};

export default Inventory;
