import { menu } from "@/assets/data"
import { cn } from "@/utils/utils"
import { Dispatch, SetStateAction } from "react";

interface Props{
    isOpen:boolean;
    onClose: Dispatch<SetStateAction<boolean>>
}

const MenuMobile = ({isOpen, onClose}:Props) => {
    return (
        <>
            <div className={cn("fixed right-0 w-72 h-full lg:hidden bg-background-foreground z-50 flex flex-col items-center justify-center transition-all", isOpen ? "top-0 delay-300":"-top-full")}>
                <ul className="flex flex-col gap-y-4">
                    {
                        menu.map((menu) => (
                            <li key={menu.href}
                                className={cn("flex items-center gap-x-2 py-3 px-6 rounded-full text-2xl",
                                    menu.href === "/menu" && "bg-primary font-medium"
                                )}
                            >
                                <i className={menu.icon}></i>
                                {menu.label}
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div role="button" 
                onClick={()=>onClose(false)}
            className={
                cn("fixed bg-black/40 z-40 lg:hidden transition-all", isOpen ? "w-full h-full right-0 top-0" : "w-0 h-0 left-0 bottom-0 delay-300")
            }>
            </div>
        </>
    )
}

export default MenuMobile
