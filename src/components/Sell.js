import React from 'react'
import { Container, Button } from 'react-floating-action-button'
import { Link } from 'react-router-dom';
function Sell() {
    return (
        <Container>
            <Link to = "/Sell">
            <Button
                className=""
                tooltip="Sell your items"
                rotate={false}
                // onClick={() => }
                >Sell</Button>
                </Link>
        </Container>
    )
}

export default Sell;