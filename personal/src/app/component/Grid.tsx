import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/Bento-Grid'
import { gridItems } from '../data/datadata'



const grid = () => {
  return (
    <section id='about'>
      
      <BentoGrid> 
        {gridItems
            .map((item, index) => (
                <BentoGridItem 
                id={item.id}
                key={item.id}
                title={item.title}
                description={item.description}
            />
        ))}
      </BentoGrid>
    </section>
  )
}

export default grid

