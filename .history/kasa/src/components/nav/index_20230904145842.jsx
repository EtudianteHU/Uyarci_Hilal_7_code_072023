import React from "react"
import styled from "styled-components"


const Navigation = () => {
    return (
        <Nav>
            <NavLink href="/">Accueil</NavLink>
            <NavLink href="/about">A propos</NavLink>
        </Nav>
    )
}

export default Navigation