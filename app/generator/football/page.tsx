"use client";

import { useRouter } from 'next/navigation';

export default function FootballPositions() {
  const router = useRouter();
  const positions: string[] = ['QB','RB','WR','TE','OL','DL','LB','CB','S','K','P'];

  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem', textAlign: 'center' }}>Choose Your Position</h1>
      <p style={{ marginBottom: '1.5rem', textAlign: 'center' }}>
        Select the football position that best matches your role.
      </p>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
          gap: '1rem',
          justifyContent: 'center',
        }}
      >
        {positions.map((pos) => (
          <button
            key={pos}
            onClick={() => router.push(`/generator/plan?position=${pos.toLowerCase()}`)}
            style={{
              padding: '1rem',
              border: '1px solid #ccc',
              borderRadius: '8px',
              background: '#fff',
              cursor: 'pointer',
              textAlign: 'center',
            }}
          >
            <span style={{ fontSize: '2rem' }}>🏈</span>
            <div style={{ marginTop: '0.5rem', color: '#000' }}>{pos}</div>
          </button>
        ))}
      </div>
    </div>
  );
}
