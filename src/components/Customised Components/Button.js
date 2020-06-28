import styled from 'styled-components';

export const ButtonContainer = styled.button`
    text-transform: capitalize;
    font-size: 1.1rem;
    background: transparent;
    font-family: Poppins, sans-serif;
    padding: 0.2rem 0.5rem;
    border: 0.05rem solid var(--lightBlue);
    color: var(--lightBlue);
    border-radius: 0.5rem;
    cursor: pointer;
    margin: 0.2rem 0.8rem;
    transition: all 0.5s ease-in-out;
    &:hover {
        background: var(--lightBlue);
        color: var(--mainBlue);
    }
    &:focus {
        outline: none
    }
`