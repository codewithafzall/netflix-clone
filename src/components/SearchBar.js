import React, { useRef } from 'react'

const SearchBar = () => {
  const search = useRef(null);
  const handleSearch = ()=>{
    console.log(search.current.value);
  }
  return (
    <div className='flex justify-center'>
        <form onSubmit={(e)=>e.preventDefault()} className='bg-black w-1/2  mt-[10%] absolute grid grid-cols-12 rounded-md'>
            <input ref={search} type='text' className='col-span-9 pl-3 my-3 mx-4 rounded-lg' placeholder='What would you like to watch today?'/>
            <button onClick={handleSearch} className='bg-red-600 px-7 mr-4 py-3 rounded-lg col-span-3 my-3'>Search</button>
        </form>
    </div>
  )
}

export default SearchBar