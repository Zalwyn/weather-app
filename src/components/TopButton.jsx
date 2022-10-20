import React from 'react'

function TopButton ({setQuery}) {
    const cities = [
        {
            id:1,
            title:'Manila',
        },
        {
            id:2,
            title:'Baguio',
        },
        {
            id:3,
            title:'Cebu',
        },
        {
            id:4,
            title:'Legazpi',
        },
        {
            id:5,
            title:'Davao',
        },
    ]

  return (
    <div className='flex items-center justify-around my-6'>
        {cities.map((city)=>(
            <button key={city.id} className='text-white text-lg font-medium active:text-pink-600' onClick={()=> setQuery({q: city.title})}>{city.title}</button>
        ))}
    </div>
  )
}

export default TopButton