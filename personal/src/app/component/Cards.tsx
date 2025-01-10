import React from 'react';
import { CardContainer } from './ui/Card3d'; // This imports from the ui/Card3d file
import { projects } from '../data/datadata'; // This imports from the data/datadata file
import { CardBody } from './ui/Card3d';
import {CardItem} from './ui/Card3d'
import { ThreeDCardDemo } from './ThreeDCardDemo';

const Cards = () => {
  return (
    <div>
     <ThreeDCardDemo/>


      <h1 className="text-white">TEST</h1>
    </div>
  );
};

export default Cards;