import React, { useState } from 'react'
import ListItem from './ListItem';
// import { menuItemImg } from '../utils/resImg';

function RestaurentCategories({data,toggle,setShowIndex}) {
    // console.log("data as Props Is :: ",data);
    const title = data.title
    
    // const displayData = props.data.itemCards

    // const [toggle,setToggle] = useState(true);

    const toggleAccordian = ()=>{
        // setToggle(!toggle);
        setShowIndex();
    }

    
  return (
    <div className='bg-slate-300 px-2 py-6 shadow-lg my-4'>
        <div className='flex justify-between cursor-pointer' onClick={()=>toggleAccordian()}>
            <span className='font-bold text-xl'>{title}({data.itemCards.length})</span>
            <span>{toggle ? "⬆️" : "⬇️"  }</span>
        </div>
        <div >
            {toggle  && data.itemCards.map(p=>{
                return   <ListItem key={p.card.info.id} p={p} />
            })}
        </div>
    </div>
  )
}

export default RestaurentCategories