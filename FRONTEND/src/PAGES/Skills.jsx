import { useRef, useState } from "react";

import { TICKER_ITEMS } from "../data";


const HERO_TAGS = ["Python", "Django", "FastAPI", "PostgreSQL", "Celery", "Docker", "AWS"];
function TickerRow() {
    return (
        <div className="flex shrink-0 items-center">
            {TICKER_ITEMS.map((item) => (
                <span
                    key={item}
                    className="flex items-center gap-8 pr-8 font-mono text-[12.5px] uppercase tracking-[0.2em] text-faint"
                >
                    {item}
                    
                </span>
            ))}
        </div>
    );
}

export function Skills() {
    return (
        <div className="relative overflow-hidden border-y border-line-soft bg-coal/70 py-3.5">
            <div className="anim-ticker flex w-max">
                <TickerRow />
                <TickerRow />
            </div>
        </div>
    )
}