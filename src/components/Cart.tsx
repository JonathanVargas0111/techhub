'use client'
import { productsCart } from "@/assets/data";
import CardQuiantityProduct from "./CardQuiantityProduct";
import { useState } from "react";
import { cn } from "@/utils/utils";

export const Cart = () => {
    const [showCart, setShowCart] = useState<boolean>(false)

    const IVA = 19;
    const subtotalProduct = productsCart.map((product) => product.price * product.quantity)
    const subtotal = subtotalProduct.reduce((acc, curr) => acc + curr, 0)
    const tax = subtotal * (IVA / 100);
    const total = subtotal + tax;

    return (
        <>
            <aside
                className={cn("fixed xl:static right-0 bg-background xl:bg-transparent p-5 xl:p-0 flex flex-col gap-y-8 2xl:gap-y-4 h-full z-50 sm:w-[70%] ls:w-[50%] xl:w-full transition-all", showCart ? "bottom-0 delay-200":"-bottom-full")}
>
                <div className="relative basis-1/12 ">
                    <i className="fi fi-rr-search absolute left-4 top-4 text-primary"></i>
                    <input type="text"
                        className="h-14 pl-12 pr-4 rounded-full outline-none w-full"
                        placeholder="Buscar producto"
                    />
                </div>
                <div className="basis-11/12 overflow-y-auto flex flex-col bg-background-foreground
                            rounded-4xl p-6">
                    <section className="basis-1/12 ">
                        <h2 className="text-2xl font-medium ">Detalles de la orden</h2></section>
                    <ul className="basis-8/12 max-h-full overflow-y-auto">
                        {
                            productsCart.map(product => (
                                <li key={product.name}
                                    className="border p-2 rounded-2xl mb-3">
                                    <CardQuiantityProduct product={product} />
                                </li>
                            )
                            )
                        }
                    </ul>
                    <section className="basis-3/12 flex flex-col justify-between gap-y-2">
                        <ul className="space-y-1 2xl:space-y-3">
                            <li className="flex items-center justify-between">
                                <p className="text-gray-500">Subtotal</p>
                                <h3 className="text-lg font-bold">${subtotal.toFixed(2)}</h3>
                            </li>
                            <li className="flex items-center justify-between">
                                <p className="text-gray-500">{`IVA (${IVA}%)`}</p>
                                <h3 className="text-lg font-bold">${tax.toFixed(2)}</h3>
                            </li>
                            <li className="flex items-center justify-between">
                                <p className="text-gray-500">Total</p>
                                <h3 className="text-lg font-bold">${total.toFixed(2)}</h3>
                            </li>
                            <button className="p-4 rounded-full bg-primary text-white w-full font-medium
                hover:tracking-widest transition-all">
                                Confirmar orden
                            </button>
                        </ul>
                    </section>
                </div>
            </aside>
            <button type="button"
                onClick={()=>(setShowCart(true))}
                className="xl:hidden fixed bottom-0 right-0 w-14 h-14 bg-black text-white text-xl rounded-tl-xl z-30">
                <i className="fi fi-br-shopping-cart"></i>
            </button>
            <div role="button" 
            onClick={()=>setShowCart(false)}
            className={cn("fixed xl:hidden transition-all", showCart ? "w-full h-full right-0 bottom-0": "w-0 h-0  right-0 top-0 delay-300")}>
            </div>
        </>
    )
};