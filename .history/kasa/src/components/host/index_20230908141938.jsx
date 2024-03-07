import React from 'react'
import styled from 'styled-components'
import colors from '../../utils/style/colors'

const WrapperHost = styled.div`
  display: flex;
`
const WrapperName = styled.div`
  margin-block: 0;
  display: grid;
  place-items: center;
  colors: ${colors.primary};
`

const WrapperBadge = styled.div`
  flex-grow: 1;
  border-radius: 50%;
  height: 50px;
  width: 50px;
`
const Host = () => {
  return (
    <WrapperHost>
      <WrapperName>  </WrapperName>
        <WrapperBadge></WrapperBadge>
      
    </WrapperHost>
  )
}
export default Host
