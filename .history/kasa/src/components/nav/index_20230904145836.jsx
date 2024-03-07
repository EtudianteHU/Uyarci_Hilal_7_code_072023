import React from "react"
impor styled from "styled-components"

const Navigation = () => {
    return (
        <Nav>
            <NavLink href="/">Accueil</NavLink>
            <NavLink href="/about">A propos</NavLink>
        </Nav>
    )
}

export default Navigation