
"use client"
import { useState } from "react";

export default function game() {
    const [world, setWorld] = useState(1);
    return (

        <div>
            <h1 class="text-2xl" align="center">World {world}</h1>
            <div class="h-7"></div>
            <div class="grid grid-cols-12 gap-4">
                {/*12x6 grid for game design*/}
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
            </div>
        </div>
    )
}