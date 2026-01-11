import { promises as fs } from 'fs';
import { NextRequest, NextResponse } from 'next/server';
import path from 'path';

export async function GET(
    request: NextRequest,
    context: { params: Promise<{ preset: string }> } // params is now a Promise in newer Next.js versions/types
) {
    // Await params to access 'preset'
    const { preset } = await context.params;

    const registryDir = path.join(process.cwd(), 'registry');
    const filePath = path.join(registryDir, preset);

    try {
        // Prevent directory traversal
        if (!filePath.startsWith(registryDir)) {
            return new NextResponse('Forbidden', { status: 403 });
        }

        const fileContent = await fs.readFile(filePath, 'utf-8');

        return new NextResponse(fileContent, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
    } catch (error) {
        console.error('Error reading registry file:', error);
        return new NextResponse('Preset not found', { status: 404 });
    }
}
