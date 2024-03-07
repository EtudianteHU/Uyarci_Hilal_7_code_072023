
  import React from 'react';

  function Index() {
    const apartmentOwnerBadgeStyle = {
      height: '50px',
      width: '50px',
      borderRadius: '50%',
      backgroundColor: 'aquamarine',
    };
  
    const apartmentOwnerStarsStyle = {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '0.2rem',
    };
  
    const starStyle = {
      fontSize: '2rem',
    };
  
    const onStarStyle = {
      color: 'aqua',
    };
  
    const offStarStyle = {
      color: 'yellow',
    };
  
    const h3Style = {
      marginBlock: '0',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'end',
      fontWeight: '400',
    };
  
    const apartmentTagsStyle = {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 200px))',
      gap: '1rem',
    };
  
    const tagStyle = {
      backgroundColor: 'blue',
      color: 'red',
      padding: '0.5em 0.5em',
      borderRadius: '0.7rem',
      textAlign: 'center',
    };
  
    return (
      <div>
        {/* ... autres éléments */}
        <div style={apartmentOwnerBadgeStyle}></div>
        <div style={apartmentOwnerStarsStyle}>
          {/* ... étoiles */}
        </div>
        <h3 style={h3Style}>
          <span>Alexandre</span>
          <span> Dumas</span>
        </h3>
        <div style={apartmentTagsStyle}>
          {/* ... balises */}
        </div>
      </div>
    );
  }
  
  export default Index;
  // ... définissez le reste de vos styles de la même manière

  return (
    <div style={apartmentHeaderStyle}>
      <div style={apartmentTitleStyle}>
        {/* ... contenu de ApartmentTitle */}
      </div>
      <div style={apartmentOwnerDetailsStyle}>
        {/* ... contenu de ApartmentOwner */}
      </div>
    </div>
  );
}

export default Index;