import React from 'react';

const AttributeScores = ({ attributes }) => {
  const renderAttribute = (name, score) => (
    <div className="text-center">
      <div className="text-xs uppercase tracking-wider text-gray-700">{name}</div>
      <div className="font-serif text-lg mt-1">
        <span className="font-bold">{score}</span> / <span className="inline-block w-8 border-b border-black"></span>
      </div>
    </div>
  );

  return (
    <div className="mb-2">
      <h3 className="text-center font-bold mb-2 uppercase tracking-widest text-gray-800">Attribute Scores</h3>
      <div className="flex justify-around">
        {renderAttribute("Vigor", attributes.vigor)}
        {renderAttribute("Presence", attributes.presence)}
        {renderAttribute("Faith", attributes.faith)}
        {renderAttribute("Sand", attributes.sand)}
      </div>
      <div className="text-xs print:text-[8px] print:leading-tight text-center mt-4 text-gray-600">
        Roll 3d6 for the first three; roll 2d6 for Sand.<br/>
        To Save, roll d20 equal to or under the current attribute score.
      </div>
    </div>
  );
};

export default AttributeScores;
