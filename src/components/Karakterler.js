import React, { useState } from 'react';
import {
  Accordion
} from 'reactstrap';

import Karakter from "./Karakter";

const Karakterler=(props)=>{
    const {data}=props;

    const [open, setOpen] = useState(data[0].name);
    const toggle = (id) => {
      if (open === id) {
        setOpen();
      } else {
        setOpen(id);
      }
    };
    return <div>
        <Accordion open={open} toggle={toggle}>
                {data.map((item,index)=>{
        return  <Karakter key={index} karakter={item}/> 
    })}
        </Accordion>
     
    </div>
}
export default Karakterler;;