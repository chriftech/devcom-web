import React, {useEffect, useState} from 'react'
import ReactConfetti from 'react-confetti'

const TODOS = [
    {id: 1, created_at: 'July 2, 25', timestamp: '4 weeks', overall_deadline: '10 Dec, 2025' ,priority: 'e.g intense(red), medium(orange), standard(yellow)', category: 'e.g tech', status: 'e.g WIP, completed, hold', task: 'Add features to the todo list page', subtasks: [
        {id: 1, created_at: 'July 2, 25', timestamp: '2 weeks', deadline: '10 Dec, 2025' ,priority: 'e.g intense(red), medium(orange), standard(yellow)', task: 'Enable category search functionality under the category dropdown'},
        {id: 2, created_at: 'July 2, 25', timestamp: '2 weeks', deadline: '10 Dec, 2025' ,priority: 'e.g intense(red), medium(orange), standard(yellow)', task: 'Design the landing page using todo items pictures'},
        
        {id: 3, created_at: 'July 2, 25', timestamp: '2 weeks', deadline: '10 Dec, 2025' ,priority: 'e.g intense(red), medium(orange), standard(yellow)', task: 'If a todo item is put on hold, calculate the time difference and update the deadline daily'},
        {id: 4, created_at: 'July 2, 25', timestamp: '2 weeks', deadline: '10 Dec, 2025' ,priority: 'e.g intense(red), medium(orange), standard(yellow)', task: 'Enable users to set a reminder for their task'},
        {id: 5, created_at: 'July 2, 25', timestamp: '2 weeks', deadline: '10 Dec, 2025' ,priority: 'e.g intense(red), medium(orange), standard(yellow)', task: 'Enable todo item view more feature'},
        {id: 6, created_at: 'July 2, 25', timestamp: '2 weeks', deadline: '10 Dec, 2025' ,priority: 'e.g intense(red), medium(orange), standard(yellow)', task: 'Enable users to set custom todo item priorities'},        
        {id: 7, created_at: 'July 2, 25', timestamp: '2 weeks', deadline: '10 Dec, 2025' ,priority: 'e.g intense(red), medium(orange), standard(yellow)', task: 'Implement a page for the csv files upload guide'},
    ]},
    {id: 2, created_at: 'July 2, 25', timestamp: '2 weeks', overall_deadline: '10 Dec, 2025', task: 'Display The Todo Items', subtasks: [
        {id: 1, created_at: 'July 2, 25', timestamp: '2 weeks', deadline: '10 Dec, 2025' ,priority: 'e.g intense(red), medium(orange), standard(yellow)', task: 'Define sample todo list data'},
        {id: 2, created_at: 'July 2, 25', timestamp: '2 weeks', deadline: '10 Dec, 2025' ,priority: 'e.g intense(red), medium(orange), standard(yellow)', task: 'Sort categories by the selected category for the first todo item'},
        {id: 3, created_at: 'July 2, 25', timestamp: '2 weeks', deadline: '10 Dec, 2025' ,priority: 'e.g intense(red), medium(orange), standard(yellow)', task: 'Let the users view their todos on a scrollable modal window'},
        {id: 4, created_at: 'July 2, 25', timestamp: '2 weeks', deadline: '10 Dec, 2025' ,priority: 'e.g intense(red), medium(orange), standard(yellow)', task: 'Sort todo items by the most recent item'},
        {id: 5, created_at: 'July 2, 25', timestamp: '2 weeks', deadline: '10 Dec, 2025' ,priority: 'e.g intense(red), medium(orange), standard(yellow)', task: 'Categorize the todo items by month'},
        {id: 6, created_at: 'July 2, 25', timestamp: '2 weeks', deadline: '10 Dec, 2025' ,priority: 'e.g intense(red), medium(orange), standard(yellow)', task: 'display confetti particles when all subtasks have been completed'},
    ]},
    {id: 3, created_at: 'July 2, 25', timestamp: '2 weeks', overall_deadline: '10 Dec, 2025', task: 'Scale & Optimize The App', subtasks: [
        {id: 1, created_at: 'July 2, 25', timestamp: '2 weeks', deadline: '10 Dec, 2025' ,priority: 'e.g intense(red), medium(orange), standard(yellow)', task: 'Add error message page'},
        {id: 2, created_at: 'July 2, 25', timestamp: '2 weeks', deadline: '10 Dec, 2025' ,priority: 'e.g intense(red), medium(orange), standard(yellow)', task: 'Add a global loader to the app'},
        {id: 3, created_at: 'July 2, 25', timestamp: '2 weeks', deadline: '10 Dec, 2025' ,priority: 'e.g intense(red), medium(orange), standard(yellow)', task: 'Configure tailwind for the app'},
        {id: 4, created_at: 'July 2, 25', timestamp: '2 weeks', deadline: '10 Dec, 2025' ,priority: 'e.g intense(red), medium(orange), standard(yellow)', task: 'Add lazy loading instead for optimization'},
        {id: 5, created_at: 'July 2, 25', timestamp: '2 weeks', deadline: '10 Dec, 2025' ,priority: 'e.g intense(red), medium(orange), standard(yellow)', task: 'Enable the app to run in the background on android devices'},
    ]},
    {id: 4, created_at: 'July 2, 25', timestamp: '2 weeks', overall_deadline: '10 Dec, 2025', task: 'Todo Item Creation', subtasks: [
        {id: 1, created_at: 'July 2, 25', timestamp: '2 weeks', deadline: '10 Dec, 2025' ,priority: 'e.g intense(red), medium(orange), standard(yellow)', task: 'Create the todo item creation page'},
        {id: 2, created_at: 'July 2, 25', timestamp: '2 weeks', deadline: '10 Dec, 2025' ,priority: 'e.g intense(red), medium(orange), standard(yellow)', task: 'Make the todo item creation button "success"'},
        {id: 3, created_at: 'July 2, 25', timestamp: '2 weeks', deadline: '10 Dec, 2025' ,priority: 'e.g intense(red), medium(orange), standard(yellow)', task: 'Enable creation of a todo item from the listing page'},
        {id: 4, created_at: 'July 2, 25', timestamp: '2 weeks', deadline: '10 Dec, 2025' ,priority: 'e.g intense(red), medium(orange), standard(yellow)', task: 'The todo creation text field must be a markup form'},
        {id: 5, created_at: 'July 2, 25', timestamp: '2 weeks', deadline: '10 Dec, 2025' ,priority: 'e.g intense(red), medium(orange), standard(yellow)', task: 'Enable tasks to be uploaded from csv files'},
    ]},
    {id: 5, created_at: 'July 2, 25', timestamp: '2 weeks', overall_deadline: '10 Dec, 2025', task: 'Create Pricing Page', subtasks: [
        {id: 1, created_at: 'July 2, 25', timestamp: '2 weeks', deadline: '10 Dec, 2025' ,priority: 'e.g intense(red), medium(orange), standard(yellow)', task: 'Limit the number of subtasks for each main todo item in a free tier account (5)'},
        {id: 2, created_at: 'July 2, 25', timestamp: '2 weeks', deadline: '10 Dec, 2025' ,priority: 'e.g intense(red), medium(orange), standard(yellow)', task: 'Disable main task check functionality if task contain subtasks'},
    ]},
    {id: 6, created_at: 'July 2, 25', timestamp: '2 weeks', overall_deadline: '10 Dec, 2025', task: 'Create Auth Features', subtasks: [
        {id: 1, created_at: 'July 2, 25', timestamp: '2 weeks', deadline: '10 Dec, 2025' ,priority: 'e.g intense(red), medium(orange), standard(yellow)', task: 'Integrate supabase third party for user authentication'},
        {id: 2, created_at: 'July 2, 25', timestamp: '2 weeks', deadline: '10 Dec, 2025' ,priority: 'e.g intense(red), medium(orange), standard(yellow)', task: 'Add user login feature'},
        {id: 3, created_at: 'July 2, 25', timestamp: '2 weeks', deadline: '10 Dec, 2025' ,priority: 'e.g intense(red), medium(orange), standard(yellow)', task: 'Design & create the user login page'},
        {id: 4, created_at: 'July 2, 25', timestamp: '2 weeks', deadline: '10 Dec, 2025' ,priority: 'e.g intense(red), medium(orange), standard(yellow)', task: 'Enable user account verification on signup'},
        {id: 5, created_at: 'July 2, 25', timestamp: '2 weeks', deadline: '10 Dec, 2025' ,priority: 'e.g intense(red), medium(orange), standard(yellow)', task: 'Enable user account verification on forgot password'},
        {id: 6, created_at: 'July 2, 25', timestamp: '2 weeks', deadline: '10 Dec, 2025' ,priority: 'e.g intense(red), medium(orange), standard(yellow)', task: 'Enable user account creation'},
        {id: 7, created_at: 'July 2, 25', timestamp: '2 weeks', deadline: '10 Dec, 2025' ,priority: 'e.g intense(red), medium(orange), standard(yellow)', task: 'Implement the todo user interface'},
        {id: 8, created_at: 'July 2, 25', timestamp: '2 weeks', deadline: '10 Dec, 2025' ,priority: 'e.g intense(red), medium(orange), standard(yellow)', task: 'Protect routes from unauthenticated users'},
    ]},
]
const Items = () => {
    const [todosItems, setTodoItems] = useState(TODOS)
    const [todoItem, setTodoItem] = useState({
        mainTaskID: 0,
        todo: {}
    });
    const [showConfetti, setShowConfetti] = useState(true);
    const [addTodoItem, setAddTodoItem] = useState(false);
    

  useEffect(() => {
    const timer = setTimeout(() => {
        setShowConfetti(false);
    }, 6000)
    return () => clearTimeout(timer);
}, [])

return (
    <React.Fragment>
        {showConfetti && (
            <ReactConfetti
                style={{width: "100%"}}
                numberOfPieces={330}
                initialVelocityX={4}
                initialVelocityY={10}
                friction={1.01}
                // wind={0.05}
            />
        )}
        
        <div className='p-4'>
            <div className='flex justify-between px-2 py-2 border-b'>
                <h2 className="text-gray- text-[16pt] font-bold">My Task List</h2>
                {
                    addTodoItem 
                    ? <button className="bg-gray-50 text-red-600 border rounded-md py-0 px-3 " onClick={() => setAddTodoItem(false)}>Cancel</button>
                    : <button className="bg-green-700 text-white rounded-md py-0 px-3 " onClick={() => setAddTodoItem(true)}>+ Add</button>
                }
            </div>
            {
                addTodoItem 
                ? <form action={'#'} method='get' className='w-full flex justify-center py-1'>
                    <div className='grid w-[100%] md:w-[90%] lg:w-[90%] gap-1'>
                        <div className='flex'>
                            <input placeholder='Add task' name="mainTodoItem" className='w-[100%] md:w-[90%] lg:w-[90%] border-gray-300 border rounded-md p-1 px-2 text-gray-600' />
                            <button className="bg-green-700 -ml-[4.35rem] text-white rounded-md py-0 px-3 rounded-l-none" onClick={() => setAddTodoItem(true)}>Create</button>
                        </div>
                        <div className='flex ml-5'>
                            <input placeholder='Add Subtask' name="mainTodoItem" className='w-[100%] md:w-[90%] lg:w-[90%] border-gray-300 border rounded-md p-1 px-2 text-gray-600' />
                            <button className="bg-gray-700 -ml-[2.6rem] text-white rounded-md py-0 px-4 rounded-l-none" onClick={() => setAddTodoItem(true)}>+</button>
                        </div>
                    </div>
                    {/* <MyRichTextEditor /> */}
                  </form>
                  
                : <div className='flex justify-between px-2 py-2'>
                    <div className='cursor-pointer hover:bg-gray-100 px-2 py-1 rounded-sm'>
                        <p className="text-[11pt]">All</p>
                    </div>
                    <div className='cursor-pointer hover:bg-gray-100 px-2 py-1 rounded-sm'>
                        <p className="text-[11pt]">Completed</p>
                    </div>
                    <div className='cursor-pointer hover:bg-gray-100 px-2 py-1 rounded-sm'>
                        <p className="text-[11pt]">Deleted</p>
                    </div>
                    <div className="text-[11pt]">
                        <input type="text" placeholder='Search Item' className='border rounded-md border-gray-200 p-1 w-50' />
                    </div>
                </div>
            }
            <hr />
            <div className='mt-2 md:lg:mx-16 grid md:grid-cols-2 lg:grid-cols-2 grid-cols-1 gap-1'>
                {TODOS.map(item => {
                    return (
                    <div>
                    <div key={item} className="border rounded-md border-t-green-300 border-t-[5px] border-blue-400 shadow-md p-2">
                        <div className='flex justify-between '>
                            <div className='flex gap-1 items-center'>
                                <input type="checkbox" className='w-4 h-4' />
                                <p className='text-[14pt] text-gray-700 font-semibold'>{item.task}</p>
                            </div>
                            <p className='cursor-pointer'>elipsis</p>
                            {/* 
                                Share ()
                                Export/Export as
                                Import
                                Edit
                                Delete
                            */}
                        </div>
                            {
                                item.subtasks.map(subtask => {
                                    return (
                                        <div key={subtask} className='hover:bg-gray-200 cursor-text' onClick={() => {
                                            setTodoItem({mainTaskID: item.id, todo: subtask})
                                        }}>
                                            <div className={'flex gap-1 ml-3 pt-1 items-start'}>
                                                
                                                <input type="checkbox" /> {item.id == todoItem.mainTaskID && subtask.task == todoItem.todo.task ? <input onChange={(e) => {
                                                    setTodoItems({...todosItems,})
                                                }} type="text" className='border rounded-sm px-2 py-1 w-full border-gray-300' value={subtask.task} /> : <p className='-mt-1'>{subtask.task}</p> } 
                                            </div>
                                        </div>
                                    )
                                })
                            }
                            <div className='flex gap-1 border-t'>
                                <div className="flex gap-1 py-1">
                                    <p className='text-[8pt] font-semibold border-l border-l-gray-500 pl-1'>Start Date: </p><p className='text-[8pt] font-semibold'>{item.overall_deadline}</p>
                                </div>
                                <div className="flex gap-1 py-1">
                                    <p className='text-[8pt] font-semibold border-l border-l-gray-500 pl-1'>Deadline: </p><p className='text-[8pt] font-semibold'>{item.overall_deadline}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    )
                })}
            </div>
        </div>
    </React.Fragment>

  )
}

export default Items