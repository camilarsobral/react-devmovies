import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { getTopSeries } from '../../services/getData'
import { getImages } from '../../utils/getImages'
import { Container, Title } from './styles'

function Series() {
    const [series, setSeries] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        async function getAllData() {
            setSeries(await getTopSeries())
        }

        getAllData()
    }, [])

    console.log(series)

    return (
        <>
            <Title>Séries</Title>
            <Container>
                {series &&
                    series.map((series) => (
                        <div key={series.id}>
                            <img
                                src={getImages(series.poster_path)}
                                onClick={() =>
                                    navigate(`/detalhe/series/${series.id}`)
                                }
                            />
                            <p>{series.name}</p>
                        </div>
                    ))}
            </Container>
        </>
    )
}

export default Series
