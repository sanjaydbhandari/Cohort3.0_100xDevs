import React from 'react'

const Tag = ({tagname,selectTag,selected}) => {

    const tagStyle={
        "HTML":{background:"#fda821"},
        "CSS":{background:"#15d4c8"},
        "Javascript":{background:"#ffd12c"},
        "React":{background:"#fda821"},
        "Default":{background:"#f9f9f9"},
    }

  return (
    <div className='tag'>
      <button type='button' className={`px-3 py-2 rounded-md border-2 border-white`} style={selected?tagStyle[tagname] :tagStyle.default} onClick={()=>selectTag(tagname)}>{tagname}</button>
    </div>
  )
}

export default Tag
