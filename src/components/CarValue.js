import React from 'react'
import { useSelector } from 'react-redux';

function CarValue() {
  const totalCost = useSelector(({cars: {data, searchTerm}}) => 
    data.filter((car)=>
       car.name.toLowerCase().includes(searchTerm.toLowerCase())
    ).reduce((acc, car)=> acc + car.cost, 0)
  );
  console.log(totalCost);
  return <div className='car-value'>TOTAL COST: ${totalCost}</div>;
}

export default CarValue;