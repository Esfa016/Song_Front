import React from "react";

const Card2 = ({ genre,songs }) => {
    return (
      <div style={{ 
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        borderRadius: '10px', 
        overflow: 'hidden', 
        margin: '20px', 
        maxWidth: '400px', 
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <div style={{ padding: '20px' }}>
          <h2 style={{ margin: '0', fontSize: '24px', fontWeight: 'bold' }}>{this.props.genre}</h2>
          <p style={{ margin: '10px 0', fontSize: '16px' }}>{this.props.songs}</p>
        </div>
        <div style={{ 
          borderTop: '1px solid #eee',
          padding: '20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%'
        }}>
          <p style={{ padding:"10" ,margin: '0', fontSize: '14px' }}>total songs</p>
        </div>
        
      </div>
    );
  }

  export default Card2