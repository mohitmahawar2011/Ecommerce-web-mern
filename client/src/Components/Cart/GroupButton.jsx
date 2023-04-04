import React, { useState } from "react";
import { addToCart } from "../../redux/actions/cartActions";
import { ButtonGroup, Button, styled } from "@mui/material";
import { useDispatch } from "react-redux";

const Component = styled(ButtonGroup)`
    margin-top: 30px;
`;

const StyledButton = styled(Button)`
    border-radius: 50%;
`;

const GroupedButton = (props) => {
    const dispatch = useDispatch();
    const [ counter, setCounter ] = useState(1);
    // console.log(props.item);

    const handleIncrement = () => {
        setCounter(counter => counter + 1 );
        dispatch(addToCart(props.item.id, props.item.quantity+1));
    };

    const handleDecrement = () => {
        setCounter(counter => counter - 1 );
        dispatch(addToCart(props.item.id, props.item.quantity-1));

    };

    return (
        <Component>
            <StyledButton onClick={() => handleDecrement()} disabled={counter == 0}>-</StyledButton>
            <Button disabled>{counter}</Button>
            <StyledButton onClick={() => handleIncrement()}>+</StyledButton>
        </Component>
    );
}

export default GroupedButton;