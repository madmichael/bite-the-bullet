import React from 'react';
import { Dices } from 'lucide-react';

const Welcome = () => {
  return (
    <div className="text-center py-20 bg-brand-surface/50 backdrop-blur rounded-lg border-2 border-brand-secondary p-6">
      <Dices className="mx-auto text-brand-accent mb-4" size={64} />
      <p className="text-xl text-brand-text">Click "Roll Character" to generate your wasteland survivor</p>
      <p className="text-brand-text-muted mt-2 italic">Every town is a candle against a vast dark</p>
    </div>
  );
};

export default Welcome;
