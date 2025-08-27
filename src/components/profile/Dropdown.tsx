import { LogOut, Settings, User } from "lucide-react"
import { Button } from "../shadcn/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "../shadcn/dropdown-menu"
import { UserAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function ProfileDropdownMenu() {

    const {SignOut} = UserAuth();
    const navigate = useNavigate();

    return (
        <div className="">
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <img className='rounded-full md:h-10 md:w-10 h-8 w-8 lg:h-12 lg:w-12 cursor-pointer' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSecWFwNqqM7uIjorZo32oIEfywcGtkB5JAsw&s" alt="profile photo" />
                    {/* <Button variant="outline">Open</Button> */}
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="start">
                    <DropdownMenuLabel className="text-center">My Account</DropdownMenuLabel>
                    <DropdownMenuGroup>
                        <DropdownMenuItem className="ring-white focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500">
                            Profile
                            <DropdownMenuShortcut><User /></DropdownMenuShortcut>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="ring-white focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500">
                            
                            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="ring-white focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500">
                            Settings
                            <DropdownMenuShortcut><Settings /></DropdownMenuShortcut>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="ring-white focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500">
                            Keyboard shortcuts
                            <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
                        </DropdownMenuItem>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="ring-white focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500">GitHub</DropdownMenuItem>
                    <DropdownMenuItem className="ring-white focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500">Support</DropdownMenuItem>
                    <DropdownMenuItem className="ring-white focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500" disabled>API</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={async () => {
                        const result = await SignOut()
                        if(result.success){
                            navigate("/login")
                        }
                    }} className="ring-white flex justify-between focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500">
                        Log out
                        <DropdownMenuShortcut><LogOut /> </DropdownMenuShortcut>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}
