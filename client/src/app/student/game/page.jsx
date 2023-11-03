
"use client"
import { useState } from "react";

export default function game() {
    const [world, setWorld] = useState(1);
    return (

        <div>
            <h1 class="text-2xl" align="center">World {world}</h1>
            <div class="grid grid-cols-12 gap-4">
                <div>01</div>
                <div>09</div>
                <div></div>
                <div>010</div>
            </div>
        </div>
    )
}