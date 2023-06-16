import styled from 'styled-components'

export const Title = styled.h1`
    color: #fff;
    position: absolute;
    top: 150px;
    left: 50px;
`

export const Container = styled.div`
    position: relative;
    top: 200px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 250px));
    width: 100vw;
    justify-content: center;
    padding: 30px;
    gap: 10px;

    div {
        width: 250px;
        display: flex;
        flex-direction: column;
        margin: 15px 0;
    }

    img {
        width: 250px;
        border-radius: 5px;
        cursor: pointer;
    }

    p {
        color: #fff;
        margin-top: 10px;
    }
`
