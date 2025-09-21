"use server"

import fs from 'fs';
import path from 'path';
import { NextResponse } from "next/server"

export async function GET() {
    try {
        const filePath = path.join(process.cwd(), 'data', 'data.json');
        const fileContent = JSON.parse(fs.readFileSync(filePath, 'utf8'));
        return NextResponse.json({ status: true, data: fileContent })
    } catch (error) {
        return NextResponse.json({ status:false, error: 'Internal Server Error' }, { status: 500 })
    }
}