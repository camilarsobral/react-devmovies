import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import Credits from '../../components/Credits'
import Slider from '../../components/Slider'
import {
    getSeriesById,
    getSeriesCredits,
    getSeriesVideos,
    getSimilarSeries
} from '../../services/getData'
import { getImages } from '../../utils/getImages'
import { Container, Background, Cover, Info, ContainerSeries } from './styles'

function DetailSeries() {
    const { id } = useParams()
    const [series, setSeries] = useState()
    const [seriesVideos, setSeriesVideos] = useState()
    const [seriesCredits, setSeriesCredits] = useState()
    const [seriesSimilar, setSeriesSimilar] = useState()

    console.log(seriesCredits)

    useEffect(() => {
        async function getAllData() {
            Promise.all([
                getSeriesById(id),
                getSeriesVideos(id),
                getSeriesCredits(id),
                getSimilarSeries(id)
            ])
                .then(([series, videos, credits, similar]) => {
                    setSeries(series)
                    setSeriesVideos(videos)
                    setSeriesCredits(credits)
                    setSeriesSimilar(similar)
                })
                .catch((error) => console.error(error))
        }

        getAllData()
    }, [])

    return (
        <>
            {series && (
                <>
                    <Background image={getImages(series.backdrop_path)} />/
                    <Container>
                        <Cover>
                            <img src={getImages(series.poster_path)} />
                        </Cover>
                        <Info>
                            <h2>{series.name}</h2>
                            {/* <SpanGenres genres={movie.genres} /> */}
                            <p>{series.overview}</p>
                            <div>
                                <Credits credits={seriesCredits} />
                            </div>
                        </Info>
                    </Container>
                    <ContainerSeries>
                        {seriesVideos &&
                            seriesVideos.map((video) => (
                                <div key={video.id}>
                                    <h4>{video.name}</h4>
                                    <iframe
                                        src={`https://www.youtube.com/embed/${video.key}`}
                                        title="Youtube Video Player"
                                        height="500px"
                                        width="100%"
                                    ></iframe>
                                </div>
                            ))}
                    </ContainerSeries>
                    {seriesSimilar && (
                        <Slider info={seriesSimilar} title={'Similares'} />
                    )}
                </>
            )}
        </>
    )
}

export default DetailSeries
