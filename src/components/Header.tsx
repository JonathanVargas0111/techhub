import Link from "next/link"
import Logo from "./Logo"

import { menu } from "@/assets/data"
import { cn } from "@/utils/utils"


export const Header = () => {
    return (
        <header className="flex items-center justify-between">
            <section>
                <Logo />
            </section>
            <section>
                <nav>
                    <ul className="flex items-center gap-x-1 bg-background-foreground p-1 rounded-full">
                        {
                            menu.map((menu) => (
                                <li key={menu.href}>
                                    <Link href={menu.href}
                                        className={cn("flex items-center gap-x-2 text-sm py-3 px-6 rounded-full transition-colors",
                                            menu.href==="/menu" ? "bg-primary text-white font-medium ": "hover:bg-background/70"
                                        )}>
                                        <i className={menu.icon}></i>{menu.label}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </nav>
            </section>
            <section>User</section>
        </header>
    )
}