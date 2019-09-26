import React from 'react';
import './CreateCommand.css';
import RenderCommand from './RenderCommand';
import MenuItems from './MenuItems';


function Create() {
  return (
    <div> 
    <p>Este va a se mi pantalla de comandas</p>
    <RenderCommand />
    <MenuItems />
    </div>
   );
}

export default Create;
