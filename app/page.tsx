import Link from "next/link";
import {DynamicLink} from "@/app/dynamic-link.client";
import {Suspense} from "react";

export default async function Home() {
    const prom = await fetch('https://ts-syntax-api.vercel.app/api/all')
    const {all} = await prom.json()

    const rawList = Object.keys(all).map(c => c)

    return (
        <main>
            <h1>API</h1>
            <p>You can use the following API endpoints to retrieve a list of TypeScript Token Syntax </p>
            <ul>
                <li><Link href={'/api/raw'}><code>/api/raw</code> : Raw list of all kinds of tokens</Link></li>
                <li><Link href={'/api/unsorted'}><code>/api/unsorted</code> : A list of all the tokens with their
                    associated hash code</Link></li>
                <li><Link href={'/api/all'}><code>/api/all</code> : All tokens by category</Link></li>
                <li><Link href={'/api/all'}><code>/api/all</code> : All tokens by category</Link></li>
                <Suspense fallback={<p>fetching data...</p>}>{
                    rawList && <DynamicLink list={rawList}/>
                }</Suspense>
            </ul>

        </main>
    )
}
