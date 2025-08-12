import React, {useEffect, useState} from 'react'
import ReactConfetti from 'react-confetti'
import MyRichTextEditor from '../TextEditor';

const TODOS = [
    {created_at: 'July 2, 25', timestamp: '4 weeks', overall_deadline: '10 Dec, 2025' ,priority: 'e.g intense(red), medium(orange), standard(yellow)', category: 'e.g tech', status: 'e.g WIP, completed, hold', task: 'Add features to the todo list page', subtasks: [
        {created_at: 'July 2, 25', timestamp: '2 weeks', deadline: '10 Dec, 2025' ,priority: 'e.g intense(red), medium(orange), standard(yellow)', task: 'Sort categories by the selected category for the first todo item'},
        {created_at: 'July 2, 25', timestamp: '2 weeks', deadline: '10 Dec, 2025' ,priority: 'e.g intense(red), medium(orange), standard(yellow)', task: 'Enable category search functionality under the category dropdown'},
        {created_at: 'July 2, 25', timestamp: '2 weeks', deadline: '10 Dec, 2025' ,priority: 'e.g intense(red), medium(orange), standard(yellow)', task: 'Design the landing page using todo items pictures'},
        // 
        {created_at: 'July 2, 25', timestamp: '2 weeks', deadline: '10 Dec, 2025' ,priority: 'e.g intense(red), medium(orange), standard(yellow)', task: 'If a todo item is put on hold, calculate the time difference and update the deadline daily'},
        {created_at: 'July 2, 25', timestamp: '2 weeks', deadline: '10 Dec, 2025' ,priority: 'e.g intense(red), medium(orange), standard(yellow)', task: 'Enable users to set a reminder for their task'},
        {created_at: 'July 2, 25', timestamp: '2 weeks', deadline: '10 Dec, 2025' ,priority: 'e.g intense(red), medium(orange), standard(yellow)', task: 'Enable todo item view more feature'},
        {created_at: 'July 2, 25', timestamp: '2 weeks', deadline: '10 Dec, 2025' ,priority: 'e.g intense(red), medium(orange), standard(yellow)', task: 'Enable users to set custom todo item priorities'},
        
        
        {created_at: 'July 2, 25', timestamp: '2 weeks', deadline: '10 Dec, 2025' ,priority: 'e.g intense(red), medium(orange), standard(yellow)', task: 'Implement a page for the csv files upload guide'},
    ]},
    {created_at: 'July 2, 25', timestamp: '2 weeks', overall_deadline: '10 Dec, 2025', task: 'Display The Todo Items', subtasks: [
        {created_at: 'July 2, 25', timestamp: '2 weeks', deadline: '10 Dec, 2025' ,priority: 'e.g intense(red), medium(orange), standard(yellow)', task: 'Define sample todo list data'},
        {created_at: 'July 2, 25', timestamp: '2 weeks', deadline: '10 Dec, 2025' ,priority: 'e.g intense(red), medium(orange), standard(yellow)', task: 'Let the users view their todos on a scrollable modal window'},
        {created_at: 'July 2, 25', timestamp: '2 weeks', deadline: '10 Dec, 2025' ,priority: 'e.g intense(red), medium(orange), standard(yellow)', task: 'Sort todo items by the most recent item'},
        {created_at: 'July 2, 25', timestamp: '2 weeks', deadline: '10 Dec, 2025' ,priority: 'e.g intense(red), medium(orange), standard(yellow)', task: 'Categorize the todo items by month'},
        {created_at: 'July 2, 25', timestamp: '2 weeks', deadline: '10 Dec, 2025' ,priority: 'e.g intense(red), medium(orange), standard(yellow)', task: 'display confetti particles when all subtasks have been completed'},
    ]},
    {created_at: 'July 2, 25', timestamp: '2 weeks', overall_deadline: '10 Dec, 2025', task: 'Scale & Optimize The App', subtasks: [
        {created_at: 'July 2, 25', timestamp: '2 weeks', deadline: '10 Dec, 2025' ,priority: 'e.g intense(red), medium(orange), standard(yellow)', task: 'Add error message page'},
        {created_at: 'July 2, 25', timestamp: '2 weeks', deadline: '10 Dec, 2025' ,priority: 'e.g intense(red), medium(orange), standard(yellow)', task: 'Add a global loader to the app'},
        {created_at: 'July 2, 25', timestamp: '2 weeks', deadline: '10 Dec, 2025' ,priority: 'e.g intense(red), medium(orange), standard(yellow)', task: 'Configure tailwind for the app'},
        {created_at: 'July 2, 25', timestamp: '2 weeks', deadline: '10 Dec, 2025' ,priority: 'e.g intense(red), medium(orange), standard(yellow)', task: 'Add lazy loading instead for optimization'},
        {created_at: 'July 2, 25', timestamp: '2 weeks', deadline: '10 Dec, 2025' ,priority: 'e.g intense(red), medium(orange), standard(yellow)', task: 'Enable the app to run in the background on android devices'},
    ]},
    {created_at: 'July 2, 25', timestamp: '2 weeks', overall_deadline: '10 Dec, 2025', task: 'Todo Item Creation', subtasks: [
        {created_at: 'July 2, 25', timestamp: '2 weeks', deadline: '10 Dec, 2025' ,priority: 'e.g intense(red), medium(orange), standard(yellow)', task: 'Enable tasks to be uploaded from csv files'},
        {created_at: 'July 2, 25', timestamp: '2 weeks', deadline: '10 Dec, 2025' ,priority: 'e.g intense(red), medium(orange), standard(yellow)', task: 'Create the todo item creation page'},
        {created_at: 'July 2, 25', timestamp: '2 weeks', deadline: '10 Dec, 2025' ,priority: 'e.g intense(red), medium(orange), standard(yellow)', task: 'Make the todo item creation button "success"'},
        {created_at: 'July 2, 25', timestamp: '2 weeks', deadline: '10 Dec, 2025' ,priority: 'e.g intense(red), medium(orange), standard(yellow)', task: 'Enable creation of a todo item from the listing page'},
        {created_at: 'July 2, 25', timestamp: '2 weeks', deadline: '10 Dec, 2025' ,priority: 'e.g intense(red), medium(orange), standard(yellow)', task: 'The todo creation text field must be a markup form'},
    ]},
    {created_at: 'July 2, 25', timestamp: '2 weeks', overall_deadline: '10 Dec, 2025', task: 'Create Pricing Page', subtasks: [
        {created_at: 'July 2, 25', timestamp: '2 weeks', deadline: '10 Dec, 2025' ,priority: 'e.g intense(red), medium(orange), standard(yellow)', task: 'Limit the number of subtasks for each main todo item in a free tier account (5)'},
        {created_at: 'July 2, 25', timestamp: '2 weeks', deadline: '10 Dec, 2025' ,priority: 'e.g intense(red), medium(orange), standard(yellow)', task: 'Disable main task check functionality if task contain subtasks'},
    ]},
    {created_at: 'July 2, 25', timestamp: '2 weeks', overall_deadline: '10 Dec, 2025', task: 'Create Auth Features', subtasks: [
        {created_at: 'July 2, 25', timestamp: '2 weeks', deadline: '10 Dec, 2025' ,priority: 'e.g intense(red), medium(orange), standard(yellow)', task: 'Integrate supabase third party for user authentication'},
        {created_at: 'July 2, 25', timestamp: '2 weeks', deadline: '10 Dec, 2025' ,priority: 'e.g intense(red), medium(orange), standard(yellow)', task: 'Add user login feature'},
        {created_at: 'July 2, 25', timestamp: '2 weeks', deadline: '10 Dec, 2025' ,priority: 'e.g intense(red), medium(orange), standard(yellow)', task: 'Design & create the user login page'},
        {created_at: 'July 2, 25', timestamp: '2 weeks', deadline: '10 Dec, 2025' ,priority: 'e.g intense(red), medium(orange), standard(yellow)', task: 'Enable user account verification on signup'},
        {created_at: 'July 2, 25', timestamp: '2 weeks', deadline: '10 Dec, 2025' ,priority: 'e.g intense(red), medium(orange), standard(yellow)', task: 'Enable user account verification on forgot password'},
        {created_at: 'July 2, 25', timestamp: '2 weeks', deadline: '10 Dec, 2025' ,priority: 'e.g intense(red), medium(orange), standard(yellow)', task: 'Enable user account creation'},
        {created_at: 'July 2, 25', timestamp: '2 weeks', deadline: '10 Dec, 2025' ,priority: 'e.g intense(red), medium(orange), standard(yellow)', task: 'Implement the todo user interface'},
        {created_at: 'July 2, 25', timestamp: '2 weeks', deadline: '10 Dec, 2025' ,priority: 'e.g intense(red), medium(orange), standard(yellow)', task: 'Protect routes from unauthenticated users'},
    ]},
]
const Items = () => {
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
                numberOfPieces={230}
                initialVelocityX={10}
                initialVelocityY={16}
                friction={1.01}
            />
        )}
        <section className="flex justify-between items-center bg-blue-500 p-2">
            <div>
                <a href="/" className="text-[12pt]">YangaList</a>
            </div>
            <div className="flex justify-center items-center gap-4 text-white font-bold"> 
                <a href="" className="md:text-[12pt] text-[8pt]">About us</a>
                <a href="" className="md:text-[12pt] text-[8pt]">Support</a>
                <a href="" className="md:text-[12pt] text-[8pt]">Statistics</a>
                <a href="" className="md:text-[12pt] text-[8pt]">Pricing</a>
                {/* <a href="" className="text-[12pt]">workspace</a> */}
            </div>
            <div>
                <img className='rounded-full md:h-10 md:w-10 h-8 w-8 lg:h-12 lg:w-12 cursor-pointer' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSecWFwNqqM7uIjorZo32oIEfywcGtkB5JAsw&s" alt="profile photo" />
            </div>
        </section>
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
                ? <form className='w-full flex justify-center bg-gray-200'>
                    <div className='grid'>
                        <input placeholder='Add task' name="mainTodoItem" className='w-[100%] md:w-[90%] lg:w-[90%] border-gray-300 border rounded-md p-1 px-2 text-gray-600' />
                        <button className="bg-green-700 text-white rounded-md py-0 px-3 " onClick={() => setAddTodoItem(true)}>Create</button>
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
                    <div key={item} className="border rounded-md border-t-orange-300 border-t-[5px] border-blue-400 shadow-md p-2">
                        <div className='flex justify-between '>
                            <div className='flex gap-1'>
                                <input type="checkbox" />
                                <p className='text-[14pt] text-gray-700 font-semibold'>{item.task}</p>
                            </div>
                            <p className='cursor-pointer'>elipsis</p>
                            {/* 
                                Share
                                Export/Export as
                                Import
                                Edit
                                Delete
                            */}
                        </div>
                            {
                                item.subtasks.map(subtask => {
                                    return (
                                        <div key={subtask}>
                                            <div className='flex gap-1 ml-3'>
                                                <input type="checkbox" /> <p>{subtask.task}</p>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                            <div className='flex gap-1 border-t'>
                                <p className='text-[10pt] font-semibold'>Deadline: {item.overall_deadline}</p>
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