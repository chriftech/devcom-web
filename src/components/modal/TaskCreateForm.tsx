import { useState } from "react"
import { Button } from "../shadcn/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../shadcn/dialog"
import { Input } from "../shadcn/input"
import { Label } from "../shadcn/label"
import { CalendarDays, CalendarPlus, DeleteIcon, Trash2Icon } from "lucide-react"
import { Popover, PopoverContent, PopoverTrigger } from "../shadcn/popover"
import { Calendar } from "../shadcn/calendar"
import { format } from "date-fns"

export function TaskModal() {
  const TODOS = [
    {
      id: 1, created_at: 'July 2, 25', timestamp: '4 weeks', overall_start_date: '', overall_deadline: '10 Dec, 2025', priority: 'e.g intense(red), medium(orange), standard(yellow)', category: 'e.g tech', status: 'e.g WIP, completed, hold', task: 'Add features to the todo list page', subtasks: [
        { id: 1, created_at: 'July 2, 25', timestamp: '2 weeks', start_date: '', deadline: '10 Dec, 2025', priority: 'e.g intense(red), medium(orange), standard(yellow)', task: 'Enable category search functionality under the category dropdown' },
      ]
    },
  ]
  const [todoItem, setTodoItem] = useState<{
    mainTaskID: number;
    todo: any;
  }>({
    mainTaskID: 0,
    todo: {}
  });


  const [newTodoItem, setNewTodoItem] = useState(false);
  const [todos, setTodos] = useState(TODOS)

  return (
    <form>
      <DialogContent className="sm:max-w-[90%] h-[90%] bg-white">
        <DialogHeader className="flex justify-center py-0">
          <DialogTitle className="text-[18pt] py-0 text-center">Create a new task</DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-1 gap-2">
          <div>
            <div className='mt-2 md:lg:mx-16 grid md:grid-cols-1 lg:grid-cols-1 grid-cols-1 gap-1'>
              {todos && todos.map(item => (
                <div key={item.id}>
                  <div className="border rounded-md border-t-green-300 border-t-[5px] border-blue-400 shadow-md p-2">
                    <div className='flex justify-between'>
                      <div className='flex gap-1 items-center justify-between'>
                        <input type="checkbox" className='w-4 h-4' />
                        <p className='text-[14pt] text-gray-700 text-center font-semibold'>{item.task}</p>
                      </div>
                      <p className='cursor-pointer'>elipsis</p>
                    </div>

                    {/* Subtasks */}
                    {item.subtasks && item.subtasks.map(subtask => (
                      <div
                        key={subtask.id}
                        className='hover:bg-gray-200 cursor-text rounded-sm'
                      >
                        <div className='flex gap-1 ml-3 pt-1 justify-between pr-3 items-center h-7'>
                          <div className='flex gap-1 ml-3 py-2 pt-1 items-center h-7'>
                            <input
                              type="checkbox"
                              disabled
                              className="hover:cursor-not-allowed py-0"
                            />
                            {item.id === todoItem.mainTaskID && subtask.task === todoItem.todo.task ? (
                              <input
                                onChange={(e) => {
                                  const updated = todos.map(t =>
                                    t.id === item.id
                                      ? {
                                        ...t,
                                        subtasks: t.subtasks.map(s =>
                                          s.id === subtask.id
                                            ? { ...s, task: e.target.value }
                                            : s
                                        )
                                      }
                                      : t
                                  )
                                  setTodos(updated)
                                }}
                                type="text"
                                className='border rounded-sm px-2 py-1 w-full border-gray-400'
                                value={subtask.task}
                              />
                            ) : (
                              <p className='-mt-1'>{subtask.task}</p>
                            )}
                          </div>
                          <p>
                            <Trash2Icon color="red" className="hover:cursor-pointer" size={15} />
                          </p>
                        </div>
                      </div>
                    ))}

                    {/* Add Subtask */}
                    <div className="py-2">
                      <input
                        type="text"
                        placeholder="+ Add subtask"
                        onKeyDown={(e) => {
                          if (e.key === "Enter" && e.currentTarget.value.trim()) {
                            const updated = todos.map(task =>
                              task.id === item.id
                                ? {
                                  ...task,
                                  subtasks: [
                                    ...task.subtasks,
                                    {
                                      id: Date.now(),
                                      created_at: new Date().toDateString(),
                                      timestamp: "just now",
                                      start_date: "",
                                      deadline: "",
                                      priority: "standard",
                                      task: e.currentTarget.value
                                    }
                                  ]
                                }
                                : task
                            )
                            setTodos(updated)
                            e.currentTarget.value = ""
                          }
                        }}
                        className="rounded-md text-[10pt] px-4 p-1 w-[80%] border text-gray-600"
                      />
                    </div>

                    {/* Start Date + Deadline */}
                    <div className='flex gap-1 border-t'>
                      {/* Start Date */}
                      <div className="flex items-center gap-1 py-1">
                        <p className='text-[10pt] text-gray-700 font-semibold border-l border-l-gray-500 pl-1'>Start Date: </p>
                        <Popover>
                          <PopoverTrigger asChild>
                            <button className="text-[10pt] hover:bg-gray-200 px-1 hover:rounded-md font-semibold flex items-center gap-1 text-left">
                              {item.overall_start_date
                                ? format(new Date(item.overall_start_date), "dd MMM, yyyy")
                                : "Pick a date"}
                              <CalendarPlus className="cursor-pointer text-blue-500" size={15} />
                            </button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0">
                            <Calendar
                              mode="single"
                              selected={item.overall_start_date ? new Date(item.overall_start_date) : undefined}
                              onSelect={(date) => {
                                const updated = todos.map(t =>
                                  t.id === item.id
                                    ? { ...t, overall_start_date: date?.toISOString() ?? "" }
                                    : t
                                )
                                setTodos(updated)
                              }}
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                      </div>

                      {/* Deadline */}
                      <div className="flex items-center gap-1 py-1">
                        <p className='text-[10pt] text-gray-700 font-semibold border-l border-l-gray-500 pl-1'>Deadline: </p>
                        <Popover>
                          <PopoverTrigger asChild>
                            <button className="text-[10pt] font-semibold flex items-center gap-1 text-left">
                              {item.overall_deadline
                                ? format(new Date(item.overall_deadline), "dd MMM, yyyy")
                                : "Pick a deadline"}
                              <CalendarPlus className="cursor-pointer text-blue-500" size={15} />
                            </button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0">
                            <Calendar
                              mode="single"
                              selected={item.overall_deadline ? new Date(item.overall_deadline) : undefined}
                              onSelect={(date) => {
                                const updated = todos.map(t =>
                                  t.id === item.id
                                    ? { ...t, overall_deadline: date?.toISOString() ?? "" }
                                    : t
                                )
                                setTodos(updated)
                              }}
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>


        </div>
        <div className="flex justify-center">
          <DialogFooter>
            <DialogClose asChild>
              <Button className="bg-green-500 w-full text-white">Cancel</Button>
            </DialogClose>
            {/* <Button type="submit">Save changes</Button> */}
          </DialogFooter>
        </div>
      </DialogContent>
    </form>
  )
}
