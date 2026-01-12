"use client";

import { useRouter } from 'next/navigation';

export default function FootballPositions() {
  const router = useRouter();
  const positions: string[] = ['QB', 'RB', 'WR', 'TE', 'OL', 'DL', 'LB', 'CB', 'S', 'K', 'P'];

  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem', textAlign: 'center' }}>
        Choose Your Position
      </h1>
      <p style={{ marginBottom: '1.5rem', textAlign: 'center' }}>
        Select the football position that best matches your role.
      </p>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
          gap: '1rem',
        }}
      >
        {positions.map((pos) => (
          <button
            key={pos}
            onClick={() => router.push('/generator/plan')}
            style={{
              padding: '1rem',
              border: '1px solid #e5e5e5',
              borderRadius: '8px',
              backgroundColor: '#fff',
              cursor: 'pointer',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.5rem',
              color: '#000',
            }}
          >
            <span style={{ fontSize: '2rem' }}>🏈</span>
            {pos}
          </button>
        ))}
      </div>
    </div>
  );
}
