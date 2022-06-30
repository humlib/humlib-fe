import { useEffect, useState } from 'react'

type Tags = string[]

interface Human {
    tags: string[]
    profession: string
    teaserText: string
    contentText: string
}

interface FetchHumansResult {
    humans: Human[]
    isLoading: boolean
    error: any // wie fetch error typen
}

interface RequestBody {
    tags: Tags
}

export const useFetchHumans = (
    pageNumber: number,
    tags: Tags
): FetchHumansResult => {
    const pageSize = 4
    const matchesAtLeast = Math.min(tags.length, 2)
    const [humans, setHumans] = useState<Human[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [error, setError] = useState(null)
    useEffect(() => {
        async function fetchFiles() {
            try {
                const requestBody: RequestBody = { tags }
                const request = new Request(
                    `http://localhost:8080/search/contains?pageNo=${pageNumber}&pageSize=${pageSize}&matchesAtLeast=${matchesAtLeast}`,
                    { method: 'GET', body: JSON.stringify(requestBody) }
                )
                const response = await fetch(request)
                const listOfHumans = await response.json()
                setHumans(listOfHumans)
            } catch (error) {
                setError(error)
            } finally {
                setIsLoading(false)
            }
        }
        setIsLoading(true)
        fetchFiles()
    }, [matchesAtLeast, pageNumber, tags])
    return { humans, error, isLoading }
}
