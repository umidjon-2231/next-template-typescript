import {NextRequest, NextResponse} from "next/server";


export default async function middleware(request: NextRequest) {
    console.log(request.url);
    return NextResponse.next()
}

export const config = {
    matcher: ['/', '/((?!_next|.*\\.|).*)'],
}