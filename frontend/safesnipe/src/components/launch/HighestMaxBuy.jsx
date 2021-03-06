import React from 'react'
import styled from 'styled-components'
import { MdVerified } from "react-icons/md"
import { AiOutlineAudit } from "react-icons/ai"
import { backgroundDarkBlue, textWhite, hoverEffect } from "../../utils"

function HighestMaxBuy() {
    return <MaxBuyCard>
        <CardContent>
        </CardContent>
    </MaxBuyCard>
}

const MaxBuyCard = styled.div`
    margin-top: 1rem;
    height: 100%;
    background-color: ${backgroundDarkBlue};
    padding: 1.5rem 2rem;
    border-radius: 1.5rem;
    color: ${textWhite};
    transition: 0.4s ease-in-out;
    &:hover {
        box-shadow: ${hoverEffect};
    }
`;

const CardContent = styled.div`

`;

export default HighestMaxBuy
