"use client"
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import Link from "next/link"
import { useEffect, useState } from "react"

export const ProgressBar = () => {
    const [weeks, setWeeks] = useState(null)

    useEffect(() => {
        (async () => {
            const weeks = await fetch("/api/get_week")
            const {data} = await weeks.json()
            setWeeks(data)
        })()
    }, [])

    return (
        <div className="grid grid-cols-8 border border-white gap-4 p-4">
            {Array.isArray(weeks) && weeks.map((item, index) => {
                return (
                    <div key={index} className="flex justify-center">
                        <Tooltip>
                            <TooltipTrigger>
                                <Link href={item.link} target="_blank" className="bg-red-500 hover:scale-110 transition duration-300 h-14 w-14 rounded-full flex justify-center items-center">{index + 1}</Link>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p className="text-lg font-bold">{item.title}</p>
                                <p className="text-md">{item.description}</p>
                            </TooltipContent>
                        </Tooltip>
                    </div>
                )
            })}
        </div>
    )
}
