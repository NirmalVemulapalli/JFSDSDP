import React, { useEffect } from 'react';

function Hello(props) {
  useEffect(() => {
    document.body.style.backgroundColor = '#ffe6e6'; // Light red theme
    return () => {
      document.body.style.backgroundColor = ''; // Reset on unmount
    };
  }, []);

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      <header style={{
        backgroundColor: '#ffcccc',
        color: '#5a0000',
        padding: '20px',
        textAlign: 'center',
        borderRadius: '8px',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
      }}>
        <h1 style={{ margin: '0' }}>Awareness About Indian Constitution {props.name}</h1>
        <p style={{ margin: '0', fontSize: '18px', fontStyle: 'italic' }}>
          Empowering citizens with knowledge about our constitutional rights and responsibilities
        </p>
      </header>
      <main style={{ marginTop: '20px' }}>
        <section style={{ textAlign: 'center', marginBottom: '20px' }}>
          <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#5a0000' }}>
            The Indian Constitution is the backbone of our democracy, embodying the principles of justice, equality, liberty, and fraternity. 
            Explore and learn about its articles, amendments, and the stories that shaped our nation.
          </p>
        </section>
        <div style={{
          display: 'flex',
          justifyContent: 'space-around',
          flexWrap: 'wrap',
          gap: '20px',
        }}>
          <div style={{
            flex: '1 1 300px',
            padding: '20px',
            backgroundColor: '#fff5f5',
            borderRadius: '8px',
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.05)',
            textAlign: 'left'
          }}>
            <h3 style={{ color: '#5a0000' }}>Why Learn About the Constitution?</h3>
            <p>
              Understanding the Constitution empowers citizens to engage actively in democracy, exercise their rights, and fulfill their duties responsibly.
            </p>
          </div>
          <div style={{
            flex: '1 1 300px',
            padding: '20px',
            backgroundColor: '#fff5f5',
            borderRadius: '8px',
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.05)',
            textAlign: 'left'
          }}>
            <h3 style={{ color: '#5a0000' }}>Interactive Features</h3>
            <p>
              Quizzes, multimedia lessons, and discussions make learning fun and accessible for all age groups.
            </p>
          </div>
          <div style={{
            flex: '1 1 300px',
            padding: '20px',
            backgroundColor: '#fff5f5',
            borderRadius: '8px',
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.05)',
            textAlign: 'left'
          }}>
            <h3 style={{ color: '#5a0000' }}>Our Mission</h3>
            <p>
              To create a platform where citizens can gain a deeper appreciation for the Constitution and its role in shaping our nation.
            </p>
          </div>
        </div>
      </main>
      <footer style={{
        marginTop: '30px',
        padding: '10px',
        textAlign: 'center',
        backgroundColor: '#ffcccc',
        color: '#5a0000',
        borderRadius: '8px',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)'
      }}>
        <p>&copy; 2024 Indian Constitution Awareness Platform. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Hello;
