"use server"

import fs from 'fs';
import path from 'path';
import { NextResponse } from "next/server"

export async function GET() {
    try {
        const completedWeekPath = path.join(process.cwd(), 'data', 'data.json');
        const FutureProjectPath = path.join(process.cwd(), 'data', 'future.json');

        const completedWeekData = JSON.parse(fs.readFileSync(completedWeekPath, 'utf8'));
        const FutureProjectData = JSON.parse(fs.readFileSync(FutureProjectPath, 'utf8'));

        return NextResponse.json({ status: true, data: { completed: completedWeekData, future: FutureProjectData }, })
    } catch (error) {
        return NextResponse.json({ status: false, error: 'Internal Server Error' }, { status: 500 })
    }
}