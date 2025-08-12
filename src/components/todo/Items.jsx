import React, {useEffect, useState} from 'react'
import ReactConfetti from 'react-confetti'

const TODOS = [
    {created_at: 'July 2, 25', timestamp: '4 weeks', priority: 'e.g intense(red), medium(orange), standard(yellow)', category: 'e.g tech', status: 'e.g WIP, completed, hold', task: 'Add features to the todo list page', subtasks: [
        {created_at: 'July 2, 25', timestamp: '2 weeks', priority: 'e.g intense(red), medium(orange), standard(yellow)', task: 'Define sample todo list data'},
        {created_at: 'July 2, 25', timestamp: '2 weeks', priority: 'e.g intense(red), medium(orange), standard(yellow)', task: 'Sort categories by the selected category for the first todo item'},
        {created_at: 'July 2, 25', timestamp: '2 weeks', priority: 'e.g intense(red), medium(orange), standard(yellow)', task: 'Enable category search functionality under the category dropdown'},
        {created_at: 'July 2, 25', timestamp: '2 weeks', priority: 'e.g intense(red), medium(orange), standard(yellow)', task: 'Add a global loader to the app'},
        {created_at: 'July 2, 25', timestamp: '2 weeks', priority: 'e.g intense(red), medium(orange), standard(yellow)', task: 'Sort the todo items by the most recent one'},
        {created_at: 'July 2, 25', timestamp: '2 weeks', priority: 'e.g intense(red), medium(orange), standard(yellow)', task: 'Categorize the todo items by month'},
        {created_at: 'July 2, 25', timestamp: '2 weeks', priority: 'e.g intense(red), medium(orange), standard(yellow)', task: 'Design the landing page using todo items pictures'},
        {created_at: 'July 2, 25', timestamp: '2 weeks', priority: 'e.g intense(red), medium(orange), standard(yellow)', task: 'Configure tailwind for the app'},
        {created_at: 'July 2, 25', timestamp: '2 weeks', priority: 'e.g intense(red), medium(orange), standard(yellow)', task: 'Add lazy loading instead for optimization'},
        {created_at: 'July 2, 25', timestamp: '2 weeks', priority: 'e.g intense(red), medium(orange), standard(yellow)', task: 'If a todo item is put on hold, calculate the time difference and update the deadline daily'},
        {created_at: 'July 2, 25', timestamp: '2 weeks', priority: 'e.g intense(red), medium(orange), standard(yellow)', task: 'Create the todo item creation page'},
        {created_at: 'July 2, 25', timestamp: '2 weeks', priority: 'e.g intense(red), medium(orange), standard(yellow)', task: 'Make the todo item creation button "success"'},
        {created_at: 'July 2, 25', timestamp: '2 weeks', priority: 'e.g intense(red), medium(orange), standard(yellow)', task: 'Enable creation of a todo item from the listing page'},
        {created_at: 'July 2, 25', timestamp: '2 weeks', priority: 'e.g intense(red), medium(orange), standard(yellow)', task: 'The todo creation text field must be a markup form'},
        {created_at: 'July 2, 25', timestamp: '2 weeks', priority: 'e.g intense(red), medium(orange), standard(yellow)', task: 'Enable users to set reminders'},
        {created_at: 'July 2, 25', timestamp: '2 weeks', priority: 'e.g intense(red), medium(orange), standard(yellow)', task: 'Enable todo item view more feature'},
        {created_at: 'July 2, 25', timestamp: '2 weeks', priority: 'e.g intense(red), medium(orange), standard(yellow)', task: 'Enable the app to run in the background on android devices'},
        {created_at: 'July 2, 25', timestamp: '2 weeks', priority: 'e.g intense(red), medium(orange), standard(yellow)', task: 'Enable tasks to be uploaded from csv files'},
        {created_at: 'July 2, 25', timestamp: '2 weeks', priority: 'e.g intense(red), medium(orange), standard(yellow)', task: 'Enable users to set custom todo item priorities'},
        {created_at: 'July 2, 25', timestamp: '2 weeks', priority: 'e.g intense(red), medium(orange), standard(yellow)', task: 'Let the users view their todos on a scrollable modal window'},
        {created_at: 'July 2, 25', timestamp: '2 weeks', priority: 'e.g intense(red), medium(orange), standard(yellow)', task: 'Implement a page for the csv files upload guide'},
        {created_at: 'July 2, 25', timestamp: '2 weeks', priority: 'e.g intense(red), medium(orange), standard(yellow)', task: 'Add page for adding error message'},
        {created_at: 'July 2, 25', timestamp: '2 weeks', priority: 'e.g intense(red), medium(orange), standard(yellow)', task: 'display confetti particles when all subtasks have been completed'},
    ]},
    
    {created_at: 'July 2, 25', timestamp: '2 weeks', task: 'Create Pricing Page', subtasks: [
        {created_at: 'July 2, 25', timestamp: '2 weeks', priority: 'e.g intense(red), medium(orange), standard(yellow)', task: 'Limit the number to subtasks for a free tier account (5) subtasks'},
        {created_at: 'July 2, 25', timestamp: '2 weeks', priority: 'e.g intense(red), medium(orange), standard(yellow)', task: 'Disable main task check functionality if task contain subtasks'},
    ]},
    {created_at: 'July 2, 25', timestamp: '2 weeks', task: 'Create  Page', subtasks: [
        {created_at: 'July 2, 25', timestamp: '2 weeks', priority: 'e.g intense(red), medium(orange), standard(yellow)', task: 'Integrate supabase third party for user authentication'},
        {created_at: 'July 2, 25', timestamp: '2 weeks', priority: 'e.g intense(red), medium(orange), standard(yellow)', task: 'Enable user signin'},
        {created_at: 'July 2, 25', timestamp: '2 weeks', priority: 'e.g intense(red), medium(orange), standard(yellow)', task: 'Enable user account creation'},
        {created_at: 'July 2, 25', timestamp: '2 weeks', priority: 'e.g intense(red), medium(orange), standard(yellow)', task: 'Implement the todo user interface'},
        {created_at: 'July 2, 25', timestamp: '2 weeks', priority: 'e.g intense(red), medium(orange), standard(yellow)', task: 'Protect routes from unauthenticated users'},
    ]},
]
const Items = () => {
  const [showConfetti, setShowConfetti] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
        setShowConfetti(false);
    }, 7000)
    return () => clearTimeout(timer);
  }, [])

  return (
    <div>
        <section className="flex bg-orange-500">
            <div className="flex justify-center gap-4 text-white font-bold"> 
                <a href="" className="text-[12pt]">YangaList-logo</a>
                <a href="" className="text-[12pt]">about us</a>
                <a href="" className="text-[12pt]">support</a>
                <a href="" className="text-[12pt]">statistics</a>
                <a href="" className="text-[12pt]">workspace</a>
                <a href="" className="text-[12pt]">profile-photo</a>
            </div>
        </section>
        {showConfetti && (
            <ReactConfetti
                style={{width: "100%"}}
                numberOfPieces={140}
                initialVelocityX={4}
                initialVelocityY={11}
                friction={1}
            />
        )}
        <h2 className="text-red-600 bg-blue-500 h2">My Task List</h2>
        <div>
            {TODOS.map(item => {
                return (<div key={item}>
                        <h4>{item.task}</h4>
                        <hr />
                        {
                            item.subtasks.map(subtask => {
                                return (
                                    <div key={subtask}>
                                        <div style={{display: 'flex'}}>
                                            <input type="checkbox" /> <p>{subtask.task}</p>

                                        </div>
                                    </div>
                                )
                            })
                        }
                        <p>Deadline: {item.task}</p>
                    <hr />
                </div>)
            })}
        </div>
    </div>
  )
}

export default Items