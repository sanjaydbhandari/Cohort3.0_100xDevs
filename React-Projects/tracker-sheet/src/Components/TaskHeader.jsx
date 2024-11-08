import React from 'react'

const TaskHeader = () => {
  return (
    <div>
        <div className="task-container flex flex-col justify-center items-center min-h-[200px] bg-cyan-200">
            <input type="text" className='min-w-[500px] px-4 py-2 outline-none ' placeholder='add task'/>
            <div className="task-bottom flex flex-row">
                <div className="task-bottom-button">
                    <button >HTML</button>
                    <button >CSS</button>
                    <button >JavaScript</button>
                    <button >React</button>
                </div>
                <select className='task-status'>
                    <option value="pending">Pending</option>
                    <option value="inprogress">In Progress</option>
                    <option value="done">Done</option>
                </select>
                <button type="button">+ Add Task</button>
            </div>
        </div>
    </div>
  )
}

export default TaskHeader
