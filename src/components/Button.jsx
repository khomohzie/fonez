import styled from 'styled-components'

export const ButtonContainer = styled.button`
    text-transform: capitalize;
    font-size: 1.4rem;
    background: transparent;
    color: darkgray;
    border: 0.05rem solid darkgray;
    border-color: ${props =>
        props.backToShop && "var(--lightBlue)"};
    color: ${props => (props.backToShop && "var(--lightBlue)")};
    border-color: ${props =>
        props.cart && "var(--mainYellow)"};
    color: ${props => (props.cart && "var(--mainYellow)")};
    border-radius: 0.5rem;
    padding: 0.2rem 0.5rem;
    outline-color: red;
    cursor: pointer;
    display: inline - block;
    margin: 0.2rem 0.5rem 0.2rem 0;
    transition: all 0.5s ease -in -out;
    &:hover {
        background: var(--mainDark);
        background: ${props =>
        props.cart && "var(--mainYellow)"};
        background: ${props =>
        props.backToShop && "var(--lightBlue)"};
        color: silver;
        color: ${props => (props.cart && "var(--mainBlue)")};
        color: ${props => (props.backToShop && "var(--mainBlue)")};
    }
    &:focus {
        outline: none;
    }
`;