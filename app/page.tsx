import Link from "next/link";
import {DynamicLink} from "@/app/dynamic-link.client";

export default async function Home() {
    const prom = await fetch('http://localhost:3001/api/all')
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
                <DynamicLink list={rawList}/>
            </ul>

        </main>
    )
}
