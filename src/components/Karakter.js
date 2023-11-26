
import React, { useState } from 'react';

import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from 'reactstrap';
const Karakter=(props)=>{
  const {karakter}=props;

  
    return <div> 
        
        <AccordionItem>
          <AccordionHeader targetId={karakter.name}>{karakter.name}</AccordionHeader>
          <AccordionBody accordionId={karakter.name}>
           <p>Height:{karakter.height}</p>
           <p>Mass:{karakter.mass}</p>
           <p>Hair_color:{karakter.hair_color}</p>
           <p>Skin_color:{karakter.skin_color}</p>
           <p>Eye_color:{karakter.eye_color}</p>
           <p>Birth_year:{karakter.birth_year}</p>
           <p>Gender:{karakter.gender}</p>
          </AccordionBody>
        </AccordionItem>
    </div>
}
export default Karakter;;