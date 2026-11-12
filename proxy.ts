import { NextRequest, NextResponse } from "next/server";

export default function middleware(request:NextRequest){
    const isLoggedin = request.cookies.get('isLoggedIn');
    if(!isLoggedin){
        return NextResponse.redirect(new URL("/login", request.url))
    }
    return NextResponse.next();

}
export const config={
    matcher:[
        "/dashboard/:path*",
"/professor/:path*",
"/students/:path*",

    ]


}