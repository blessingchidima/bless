import React, { useEffect, useState } from 'react'
import { viewAuthor } from '../api/AuthorAPI'

import { useQuery } from "@tanstack/react-query"
import { viewRequest } from '../api/friendAPI'
import { getOneAuthor } from '../api/AuthAPI'
import { readArticle } from '../api/ArticleAPI'

export const useAuthor = () => {

    const [authors, setAuthors] = useState([])

    useEffect(() => {
        viewAuthor().then((res) => {
            setAuthors(res)
        })
    }, [])

    return authors
}


export const useTanAuthor = () => {
    const { data: authors, error, isLoading } = useQuery({
        queryKey: ['viewAuthor'],
        queryFn: viewAuthor,
        refetchInterval: 1000,
    })
    return { authors, error, isLoading }
}

export const useTanAuthorOne = (id: string) => {
    const { data: author, error, isLoading } = useQuery({
        queryKey: ['viewAuthorOne', { id: id }],
        queryFn: () => getOneAuthor(id),
        refetchInterval: 1000,
    })
    return { author, error, isLoading }
}




export const useTanAuthorRequest = (id: string) => {
    const { data } = useQuery({
        queryKey: ['viewAuthorRequest', { id: id }],
        queryFn: () => viewRequest(id),
        refetchInterval: 1000,
    })


    return { data }
}

export const useTanArticle = async (id: string) => {
    const { data: article, isLoading } = useQuery({
        queryKey: ["ArticleOfFriends", { id: id }],
        queryFn: () => readArticle(id),
        refetchInterval: 1000
    })

    return { article, isLoading }
}