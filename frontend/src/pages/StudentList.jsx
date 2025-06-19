import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const StudentList = () => {
  const { gurukulaId } = useParams();
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch(`/api/gurukulas/${gurukulaId}/students`)
      .then(res => res.json())
      .then(data => setStudents(data))
      .catch(err => console.error('Error fetching students:', err));
  }, [gurukulaId]);

  return (
    <div style={{
      minHeight: '100vh',
      padding: '40px 20px',
      background: 'linear-gradient(to bottom right, #f7b267, #f79d84, #a774bc, #452a4d)',
      fontFamily: 'Segoe UI, sans-serif',
      color: '#fff'
    }}>
      <h2>Students in Gurukula #{gurukulaId}</h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
        gap: '20px',
        marginTop: '30px'
      }}>
        {students.map(s => (
          <div key={s.id} style={{
            background: 'rgba(0, 0, 0, 0.6)',
            borderRadius: '16px',
            padding: '20px',
            boxShadow: '0 6px 12px rgba(0, 0, 0, 0.3)',
            textAlign: 'center'
          }}>
            <img
              src={s.photo_url}
              alt={s.name}
              style={{ width: '80px', height: '80px', borderRadius: '50%', marginBottom: '10px' }}
            />
            <h4>{s.name}</h4>
            <p>Level: {s.level}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentList;
