import React, {useState} from 'react'
import { UilSearch , UilMapMarker} from '@iconscout/react-unicons'

function Inputs ({setQuery, units ,setUnit}) {
  const [city, setCity] = useState("");

  const unitChange =(e) =>{
    const selectedUnit = e.currentTarget.name;
    if (units !== selectedUnit) setUnit(selectedUnit);
    return 'active:text-pink-600'
  }
  
  const searchClick = () =>{
    if (city !== '') setQuery({q: city})
  };

  const locationClick = ()=>{
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition((position)=>{
        let lat = position.coords.latitude
        let lon = position.coords.longitude

        setQuery({
          lat,lon
        })
      })
    }
  }

  return(
  <div className='flex flex-row justify-center my-6'>
   <div className='flex flex-row w-3/4 items-center justify-center space-x-4'>
    <input type="text"
    value={city} onChange={(e) => setCity(e.currentTarget.value)}
    placeholder='search' className="text-l font-light p-2 w-full shadow-xl focus:outline-none first-letter:capitalize rounded-full" />
    <UilSearch size={25} className='text-white  cursor-pointer transition ease-out hover:scale-125 ' onClick={searchClick}/>
    <UilMapMarker size={25} className='text-white cursor-pointer transition ease-out hover:scale-125' onClick={locationClick}/>
   </div>
    <div className='flex flex-row w-1/4 items-center justify-center'>
        <button name='metric' className='text-xl text-white font-light transition ease-out active:text-pink-600 hover:scale-125' onClick={unitChange}>°C</button>
        <p className='text-xl text-white mx-1'>l</p>
        <button name='emerial' className='text-xl text-white font-light transition ease-out hover:scale-12' onClick={unitChange}>°F</button>
    </div>
  </div>
  )
}

export default Inputs