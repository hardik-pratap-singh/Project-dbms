import React from 'react'
import { Container, Button } from 'react-floating-action-button'

function Sell() {
    return (
        <Container>
            <Button
                className="fab-item btn btn-link btn-lg text-white sell-btn"
                tooltip="Sell you items"
                rotate={true}
                // onClick={() => alert('FAB Rocks!')}
                >Sell</Button>
        </Container>
    )
}

export default Sell;