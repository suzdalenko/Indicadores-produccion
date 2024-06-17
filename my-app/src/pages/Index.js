import React from 'react';
import Example from '../components/Example';
import globals from '../globals';

const Index = () => {
  var x = 1;
  var y = 2;
  console.log(globals)
  globals.midata = 123
  console.log(globals)
  globals.midata = 1234
  let z = 3

  //  <Example /> 

  return (
    <div>
     
      <h1>Index</h1>
    </div>
  );
};

export default Index;
