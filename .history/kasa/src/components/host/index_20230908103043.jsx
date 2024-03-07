import React from 'react'
import styled from 'styled-components'
import colors from '../../utils/style/colors'

const WrapperHost = styled.div`
  display: flex;
`
const WrapperName = styled.div`
  margin-top: 0;
  margin-bottom: 0;
  margin-block: 0;
`

const WrapperBadge = styled.div`
  flex-grow: 1;
  border-radius: 50%;
  height: 50px;
  width
`
const Host = () => {
  return (
    <WrapperHost>
      <WrapperName>
        <WrapperBadge></WrapperBadge>
      </WrapperName>
    </WrapperHost>
  )
}
export default Host
