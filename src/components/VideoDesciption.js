import React from 'react'

const VideoDescription = ({title, overview}) => {
  return (
    <div>
        <div className="w-screen aspect-video pt-[20%] px-6 md:px-16 absolute text-white md:bg-gradient-to-r from-slate-900">
      <h1 className="text-xl mt-10 md:text-4xl font-bold">{title}</h1>
      <p className="hidden md:inline-block py-6 text-md w-1/4">{overview}</p>
      <div className="my-4 md:m-0">
        <button className=" bg-white text-black py-1 md:py-2 px-3 md:px-12 text-xs md:text-lg  rounded-lg hover:bg-opacity-80">
          ▶️ Play
        </button>
        <button className="hidden md:inline-block mx-2  bg-gray-500 text-white py-2 px-12 text-lg bg-opacity-50 rounded-lg">
          More Info
        </button>
      </div>
    </div>
    </div>
  )
}

export default VideoDescription;