"use client";

import Link from "next/link";

function Error() {
    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            height: "100%"
        }}>
            <h1>An error has occured. Sorry for that!</h1>
            <Link
                href="/"
                style={{ textDecoration: "underline", fontSize: 20, marginTop: 8 }}
            >
                Go Home
            </Link>
        </div>
    )
}

export default Error;

/*
Kullanımı:

function MoviePage({params, searchParam}){
    if(searchParams.error === true) throw new Error("Error happened")
}

*/