"use client"
import { ModeToggle } from '@/components/mode-toggle';

  


export function NavBar(){
    return(
        <nav className="flex items-center justify-between p-3 transition-colors bg-green-500 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
            <img src="/LogoBranco.png" alt="img" className="w-25 h-10 "/>
            <ModeToggle /> 
        </nav>
    )
}


