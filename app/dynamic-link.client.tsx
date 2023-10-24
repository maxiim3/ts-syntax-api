'use client'

import Link from "next/link";
import {useState} from "react";

export function DynamicLink({list: rawList}) {
    const [selected, setSelected] = useState('')
    return (<li>
        <label htmlFor={'cat'}>Select a category</label>
        <select onChange={e=> setSelected(e.currentTarget.value)} name="category" id="cat">
        {rawList.map(c => (
            <option key={c} value={c}>{c}</option>
        ))}
    </select>
        <Link href={`/api/${selected}`}><code>api/{selected}</code> : Get by Category: {selected}</Link>
    </li>);
}
