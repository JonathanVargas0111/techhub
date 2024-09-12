"use client"
import Link from "next/link"
import Image from "next/image"


import { menu } from "@/assets/data"
import { cn } from "@/utils/utils"

import Logo from "./Logo"
import MenuMobile from "./MenuMobile"
import { useState } from "react"
import ConfigurationMenu from "./ConfigurationMenu"

const urlUser = "https://img.freepik.com/psd-gratis/3d-ilustracion-persona-gafas-sol_23-2149436188.jpg?w=740&t=st=1726106228~exp=1726106828~hmac=44002d53389c1077d2d780198d18675568d5083d31bc767a2920d1b60a250d35"

export const Header = () => {
    const [showMenuMobile, setShowMenuMobile] = useState<boolean>(false)    
    const [showMenuSettings, setShowMunuSettings] = useState<boolean>(false)    

    return (
        <>
            <header className="flex items-center justify-between">
                <section>
                    <Logo />
                </section>
                <section className="hidden lg:block">
                    <nav>
                        <ul className="flex items-center gap-x-1 bg-background-foreground p-1 rounded-full">
                            {
                                menu.map((menu) => (
                                    <li key={menu.href}>
                                        <Link href={menu.href}
                                            className={cn("flex items-center gap-x-2 text-sm py-3 px-6 rounded-full transition-colors",
                                                menu.href === "/menu" ? "bg-primary text-white font-medium " : "hover:bg-background/70"
                                            )}>
                                            <i className={menu.icon}></i>{menu.label}
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </nav>
                </section>
                <section>
                    <ul className="flex items-center gap-x-3 bg-background-foreground p-3 rounded-full">
                        <li className="flex items-center gap-x-2">
                            <Image
                                src={urlUser}
                                alt="Image"
                                width={100}
                                height={100}
                                className="w-10 h-10 object-cover rounded-full"
                            />
                            <h5 className="font-medium">Juan</h5>
                        </li>
                        <li>
                            <button
                                type="button"
                                onClick={()=>setShowMunuSettings(true)}
                                className={cn("bg-background text-xl w-10 h-10 flex items-center justify-center rounded-full ", showMenuSettings ? "bg-primary/30  font-medium text-white" :"")}
                            >
                                <i className="fi fi-rr-settings"></i>
                            </button>
                        </li>
                        <li className="lg:hidden" >
                            <button
                                onClick={() => setShowMenuMobile(true)}

                                className="bg-background text-xl w-10 h-10 flex items-center justify-center rounded-full" type="button">
                                <i className="fi fi-rr-bars-staggered"></i>
                            </button>
                        </li>
                    </ul>
                </section>
            </header>
            <ConfigurationMenu isOpen={showMenuSettings} onClose={setShowMunuSettings}/>
            <MenuMobile isOpen={showMenuMobile} onClose={setShowMenuMobile} />
        </>
    )
}