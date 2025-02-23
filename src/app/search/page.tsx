'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

export default function SearcPage() {
    const searchParams = useSearchParams()
    const search = searchParams.get('q')

    useEffect(() => {
        console.log(search)
    }, [search])

    return <>Search: {search}</>
}