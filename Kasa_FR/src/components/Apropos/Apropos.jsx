import React from 'react';
import ImgCover from './ImgCover';
import Fiabiliti from './Fiabiliti';
import Service from './Service';
import Respect from './Respect';
import Security from './Security';
function Apropos() {
  return (
    <div className="apropos">
        <ImgCover />
        <Fiabiliti />
        <Respect />
        <Service />
        <Security />
    </div>
  );
}
export default Apropos;