import React from 'react'

function Index() {
  const apartmentHeaderStyle = {
    display: 'flex',
  }

  const apartmentTitleStyle = {
    flexGrow: 1,
  }

  const apartmentOwnerDetailsStyle = {
    display: 'flex',
    gap: '0.5rem',
  }

  const apartmentOwnerBadgeStyle = {
    height: '50px',
    width: '50px',
    borderRadius: '50%',
    backgroundColor: 'aquamarine',
  }

  const apartmentOwnerStarsStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '0.2rem',
  }

  const starStyle = {
    fontSize: '2rem',
  }

  const onStarStyle = {
    color: 'aqua',
  }

  const offStarStyle = {
    color: 'yellow',
  }

  const h3Style = {
    marginBlock: '0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'end',
    fontWeight: '400',
  }

  const apartmentTagsStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 200px))',
    gap: '1rem',
  }

  const tagStyle = {
    backgroundColor: 'blue',
    color: 'red',
    padding: '0.5em 0.5em',
    borderRadius: '0.7rem',
    textAlign: 'center',
  }

  return (
    <div style={apartmentHeaderStyle}>
      <div style={apartmentTitleStyle}>
        <h1>Crazy loft on Canal Saint Martin</h1>
        <h2>Paris, Ile de France</h2>
        <div style={apartmentTagsStyle}>
          <span style={tagStyle}>Cozy</span>
          <span style={tagStyle}>Canal</span>
          <span style={tagStyle}>Paris 10</span>
        </div>
      </div>
      <div style={apartmentOwnerDetailsStyle}>
        <h3 style={h3Style}>
          <span>Alexandre</span>
          <span> Dumas</span>
        </h3>
        <div style={apartmentOwnerBadgeStyle}></div>
        <div style={apartmentOwnerStarsStyle}>
          <span style={{ ...starStyle, ...onStarStyle }}>★</span>
          <span style={{ ...starStyle, ...onStarStyle }}>★</span>
          <span style={{ ...starStyle, ...onStarStyle }}>★</span>
          <span style={{ ...starStyle, ...offStarStyle }}>★</span>
          <span style={{ ...starStyle, ...offStarStyle }}>★</span>
        </div>
      </div>
    </div>
  )
}

export default Index
