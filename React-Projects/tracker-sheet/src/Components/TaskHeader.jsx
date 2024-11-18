import React, { useState } from 'react'
import Tag from './Tag'

const TaskHeader = ({setTasks}) => {
    
    const [taskData,settaskData] = useState({
        task:"",
        status:"Pending",
        tags:[]
    })

    const selectTag = (tagname) => {
        if(taskData.tags.some((item)=>item === tagname)){
            const filterTag = taskData.tags.filter((item)=>item!=tagname)
            settaskData((prev)=>{return{
                ...prev,tags:filterTag
            }})
        }else{
            settaskData((prev)=>{return{
                ...prev,tags:[...prev.tags,tagname]
            }})
        }
    }

    const checkTag = (tag) => {
        return taskData.tags.some((item)=>item===tag)
    }



    const handleChange = (e) => { 
        const {name,value} = e.target;
        settaskData(prev=>({...prev,[name]:value}))
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        setTasks((prev)=>[...prev,taskData]
        )
    }

  return (
    <div>
        <div className="task-container flex flex-col justify-center items-center min-h-[200px] bg-gray-400 border-b-2 border-gray-900">
            <div className="flex flex-col w-[600px] ">
                <form action="" onSubmit={handleSubmit}>
                <input type="text" name="task" className='min-w-[500px] px-4 py-2 outline-none rounded-lg text-gray-800' placeholder='Enter the Task' onChange={handleChange}/>
            <div className="task-bottom flex flex-col  sm:flex-row justify-between mt-5">
                <div className="task-bottom-button flex gap-2 flex-wrap">
                   <Tag tagname={"HTML"} selectTag={selectTag} selected={checkTag("HTML")}/>
                   <Tag tagname={"CSS"} selectTag={selectTag} selected={checkTag("CSS")}/>
                   <Tag tagname={"Javascript"} selectTag={selectTag} selected={checkTag("Javascript")}/>
                   <Tag tagname={"React"} selectTag={selectTag} selected={checkTag("React")}/>
                   
                </div>
                <div className="flex gap-2">
                <select name="status" className='task-status outline-none px-3 py-2 rounded-lg border-solid border-2 border-gray-400 text-gray-800' onChange={handleChange}>
                    <option value="Pending">Pending</option>
                    <option value="InProgress">In Progress</option>
                    <option value="Done">Done</option>
                </select>
                <button className="px-4 py-2 text-white font-semibold bg-blue-700 border-none rounded-lg" type="button" onClick={handleSubmit}>+ Add Task</button>
                </div>
            </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default TaskHeader
