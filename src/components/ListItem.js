const ListItem = ({p})=>{
    return (
        <div className=' border-b-2 pb-2 my-4 flex px-2 mx-2'>
                <ul className='w-9/12'>
                    <li className='text-lg font-bold'>{p.card.info.name}</li>
                    <li> ₹-{p.card.info.price ? p.card.info.price/100 : p.card.info.defaultPrice/100}</li>
                    <li className='font-normal text-xs my-2 pr-4'>{p.card.info.description}</li>
                    <button className='border-full bg-black text-white px-4 rounded-lg'>Add</button>
                </ul>
                <div >
                    <img className='rounded-2xl' src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/" + p.card.info.imageId} />
                </div>

            </div>
    )
}


export default ListItem;