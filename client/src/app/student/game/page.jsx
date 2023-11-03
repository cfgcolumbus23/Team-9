
"use client"
import { useState } from "react";

export default function game() {
    const [world, setWorld] = useState(1);
    return (

        <div>
            <h1 class="text-2xl pt-7" align="center">World {world}</h1>
            <div class="w-[1280px] h-[832px] relative bg-white">
                <div class="w-[95px] h-[95px] left-[85px] top-[235px] absolute bg-zinc-300 rounded-full"></div>
                <div class="absolute left-[100px] top-[320px]">
                    <svg width="164" height="139" viewBox="0 0 164 139" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1C0.5 1 45.5383 143.633 163.5 137.5" stroke="black" stroke-dasharray="2 2"/>
                    </svg> 
                </div>
                <div class="left-[350px] top-[250px] absolute ">
                    <svg width="575" height="266" viewBox="0 0 575 266" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 208C87.2609 187.289 117.166 203.863 149.5 265.5M239 265.5C311.096 242.521 341.899 219.316 361.5 140M426 69.5C462.129 8.74334 493.019 -8.11672 574.5 4.5" stroke="black" stroke-dasharray="2 2"/>
                    </svg> 
                </div>
                <div class="w-[95px] h-[95px] left-[501px] top-[471px] absolute bg-zinc-300 rounded-full"></div>
                <div class="w-[95px] h-[95px] left-[701px] top-[304px] absolute bg-zinc-300 rounded-full"></div>
                <div class="w-[95px] h-[95px] left-[934px] top-[201px] absolute bg-zinc-300 rounded-full"></div>
                <div class="w-[95px] h-[95px] left-[265px] top-[403px] absolute bg-zinc-300"></div>
                <div class="top-[351px] left-[1117px] absolute">
                    <svg width="106" height="100" viewBox="0 0 106 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M53 0L65.3483 38.0041H105.308L72.9799 61.4919L85.3282 99.4959L53 76.0081L20.6718 99.4959L33.0201 61.4919L0.691891 38.0041H40.6517L53 0Z" fill="#D9D9D9"/>
                    </svg> 
                </div>
                <div class="top-[266px] left-[1028px] absolute">
                    <svg width="143" height="88" viewBox="0 0 143 88" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1.00003C90.6466 4.30554 119.611 24.9255 142 87.5" stroke="black" stroke-dasharray="2 2"/>
                    </svg> 
                </div>
            </div>
        </div>
    )
}