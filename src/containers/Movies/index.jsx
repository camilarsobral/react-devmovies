import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { getAllMovies } from '../../services/getData'
import { getImages } from '../../utils/getImages'
import { Container, Title } from './styles'

function Movies() {
    const [movies, setMovies] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        async function getAllData() {
            setMovies(await getAllMovies())
        }

        getAllData()
    }, [])

    return (
        <>
            <Title>Filmes</Title>
            <Container>
                {movies &&
                    movies.map((movie) => (
                        <div key={movie.id}>
                            <img
                                src={getImages(movie.poster_path)}
                                onClick={() => navigate(`/detalhe/${movie.id}`)}
                            />
                            <p>{movie.title}</p>
                        </div>
                    ))}
            </Container>
        </>
    )
}

export default Movies
