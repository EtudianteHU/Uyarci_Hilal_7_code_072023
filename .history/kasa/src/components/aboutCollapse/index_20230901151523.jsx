import React from 'react'
import colors from '../../utils/style/colors'



const CollapseWrapper=styled.div`
background-color:{color.primary}
color:${colors.colorTertiary}
`


const AboutCollapse  = () => {
    return (

<CollapseWrapper>
<Collapse>
<CollapseContent>
</CollapseContent>
</Collapse>

</CollapseWrapper>





    }

export default AboutCollapse