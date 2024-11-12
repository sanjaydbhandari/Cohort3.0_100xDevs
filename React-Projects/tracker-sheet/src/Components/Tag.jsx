import React from 'react'

const Tag = ({tagname,color,index}) => {
  return (
    <div className='tag' key={index} >
      <button className={`px-3 py-2 rounded-md border-2 border-white hover:bg-${color}`} >{tagname}</button>
    </div>
  )
}

export default Tag
