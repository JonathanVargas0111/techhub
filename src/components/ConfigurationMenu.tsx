import { cn } from '@/utils/utils';
import React, { Dispatch, SetStateAction } from 'react'

interface Props {
    isOpen: boolean;
    onClose: Dispatch<SetStateAction<boolean>>
}

const ConfigurationMenu = ({ isOpen, onClose }: Props) => {
    return (
        <>
            <div className={cn("fixed right-6 py-2 w-52 min-h-80 bg-background-foreground z-50 flex flex-col items-center justify-center rounded-2xl", isOpen ? "top-24 delay-100" : "-top-full")}>
                <ul className="flex flex-col gap-y-4">
                    <li className="flex items-center gap-x-2 py-3 px-6 rounded-full text-lg hover:bg-background/70">Perfil</li>
                    <li className="flex items-center gap-x-2 py-3 px-6 rounded-full text-lg hover:bg-background/70">Favoritos</li>
                    <li className="flex items-center gap-x-2 py-3 px-6 rounded-full text-lg hover:bg-background/70">Medio de pago</li>
                    <li className="flex items-center gap-x-2 py-3 px-6 rounded-full text-lg text-red-500">Salir</li>
                </ul>
            </div>
            <div role="button"
                onClick={() => onClose(false)}
                className={
                    cn("fixed z-40 transition-all", isOpen ? "w-full h-full right-0 top-0" : "w-0 h-0 left-0 bottom-0 delay-300")
                }>
            </div>
        </>
    )
}

export default ConfigurationMenu