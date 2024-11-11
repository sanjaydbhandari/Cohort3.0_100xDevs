import React from 'react'

const languages = [{
    name:"HTML",
    color:"#ff0000"
},{
    name:"CSS",
    color:"#f300f3"
},{
    name:"Javascript",
    color:"#63393e"
},{
    name:"React",
    color:"#00f"
}]

const TaskHeader = () => {
  return (
    <div>
        <div className="task-container flex flex-col justify-center items-center min-h-[200px] bg-gray-400 border-b-2 border-gray-900">
            <div className="flex flex-col w-[600px] ">
            <input type="text" className='min-w-[500px] px-4 py-2 outline-none rounded-lg text-gray-800' placeholder='Enter the Task'/>
            <div className="task-bottom flex flex-row justify-between mt-5">
                <div className="task-bottom-button flex gap-2 flex-wrap">
                    {
                        languages.map((language,index)=>(
                            <button className={`px-3 py-2 rounded-md text-white`} style={{"background":language.color}}  key={index} >{language.name}</button>
                        ))
                    }
                </div>
                <div className="flex gap-2">
                <select className='task-status outline-none px-3 py-2 rounded-lg border-solid border-2 border-gray-400 text-gray-800'>
                    <option value="pending">Pending</option>
                    <option value="inprogress">In Progress</option>
                    <option value="done">Done</option>
                </select>
                <button className="px-4 py-2 text-white font-semibold bg-blue-700 border-none rounded-lg" type="button">+ Add Task</button>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default TaskHeader
