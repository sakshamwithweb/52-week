"use client"
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import Link from "next/link"
import { useEffect, useState } from "react"

export const ProgressBar = () => {
    const [weeks, setWeeks] = useState(Array.from(Array(52).keys())) // All 52 weeks
    const [completedWeeks, setCompletedWeeks] = useState(null)

    useEffect(() => {
        (async () => {
            const completedWeeks = await fetch("/api/get_week")
            const { data } = await completedWeeks.json()
            setCompletedWeeks(data)
        })()
    }, [])

    return (
        <div className="grid grid-cols-8 border border-white gap-4 p-4">
            {Array.isArray(completedWeeks) && Array.isArray(weeks) && weeks.map((item, index) => {
                // We are saying: index of the current week must be equal or less than the total completed week. -1 because index starts from 0 whereas length starts from 1 ;)
                if (index <= completedWeeks.length - 1) { // When week is completed
                    return <div key={index} className="flex justify-center">
                        <Tooltip>
                            <TooltipTrigger>
                                <Link href={completedWeeks[index].link} target="_blank" className="bg-red-500 hover:scale-110 transition duration-300 h-14 w-14 rounded-full flex justify-center items-center">{index + 1}</Link>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p className="text-lg font-bold">{completedWeeks[index].title}</p>
                                <p className="text-md">{completedWeeks[index].description}</p>
                            </TooltipContent>
                        </Tooltip>
                    </div>
                } else { // Future week
                    return <div key={index} className="flex justify-center">
                        <div className="bg-gray-500 hover:scale-110 transition duration-300 h-14 w-14 rounded-full flex justify-center items-center cursor-pointer">
                            {index + 1}
                        </div>
                    </div>
                }
            })}
        </div>
    )
}
