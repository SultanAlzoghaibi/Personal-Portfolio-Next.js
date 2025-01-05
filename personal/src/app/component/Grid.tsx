import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/Bento-Grid'

const grid = () => {
  return (
    <section id='about'>
      
      <BentoGrid> 
        {[{
            title: "Title1", description: "Description1", id:"1"}]
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

