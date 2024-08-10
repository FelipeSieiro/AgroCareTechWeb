"use client"
import { ModeToggle } from '@/components/mode-toggle';

  


export function NavBar(){
    return(
        <nav className="flex items-center justify-between p-3 transition-colors bg-green-500">
            <img src="/LogoBranco.png" alt="img" className="w-25 h-10 "/>
            <ModeToggle/> 
        </nav>
    )
}


