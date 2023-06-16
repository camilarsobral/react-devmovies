import { getImages } from '../../utils/getImages'
import { Container, Title } from './styles'

function CreditsSeries({ credits }) {
    return (
        <>
            <Title>Créditos</Title>
            {credits && (
                <Container>
                    {credits.map((artist) => (
                        <div key={artist.id}>
                            <img src={getImages(artist.profile_path)} alt="" />
                            <p>{artist.original_name}</p>
                        </div>
                    ))}
                    <div></div>
                </Container>
            )}
        </>
    )
}

export default CreditsSeries
