import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    margin-top: 10px;
    gap: 10px;

    div {
        display: flex;
        flex-direction: column;
        gap: 2px;
    }

    img {
        width: 130px;
    }

    p {
        color: #fff;
        font-size: 12px;
    }
`

export const Title = styled.h4`
    color: #fff;
    font-size: 28px;
    margin-top: 30px;
`
