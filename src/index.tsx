import React from 'react';

type ThingProps = {
  name: string;
  otherThing?: boolean;
};

export const Thing: React.FC<ThingProps> = () => {
  return <div>the snozzberries taste like snozzberries</div>;
};
