import React from 'react';

const AttributeScores = ({ attributes }) => {
  const renderAttribute = (name, score) => (
    <div className="text-center">
      <div className="text-xs uppercase tracking-wider mb-1 text-gray-700">{name}</div>
      <div className="w-16 h-16 border-2 border-black rounded-full flex items-center justify-center bg-gray-100">
        <span className="text-2xl font-bold font-serif">{score}</span>
      </div>
    </div>
  );

  return (
    <div className="mb-6">
      <h3 className="text-center font-bold mb-2 uppercase tracking-widest text-gray-800">Attribute Scores</h3>
      <div className="text-center text-xs italic mb-4 text-gray-600">Maximum/Current</div>
      <div className="flex justify-around">
        {renderAttribute("Vigor", attributes.vigor)}
        {renderAttribute("Presence", attributes.presence)}
        {renderAttribute("Faith", attributes.faith)}
        {renderAttribute("Sand", attributes.sand)}
      </div>
      <div className="text-xs text-center mt-4 text-gray-600">
        Roll 3d6 for the first three; roll 2d6 for Sand.<br/>
        To Save, roll d20 equal to or under the current attribute score.
      </div>
    </div>
  );
};

export default AttributeScores;
