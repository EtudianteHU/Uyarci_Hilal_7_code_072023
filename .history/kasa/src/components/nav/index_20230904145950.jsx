import React from "react"
import styled from "styled-components"
import colors from '../../utils/style'

const Navigation = () => {
    return (
        <Nav>
            <NavLink href="/">Accueil</NavLink>
            <NavLink href="/about">A propos</NavLink>
        </Nav>
    )
}

export default Navigation