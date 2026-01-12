'use client';

import { useRouter } from 'next/navigation';

export default function SportSelection() {
  const router = useRouter();

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '2rem', textAlign: 'center' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Select Your Sport</h1>
      <p style={{ marginBottom: '1.5rem' }}>Choose a sport to see positions.</p>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button
          onClick={() => router.push('/generator/football')}
          style={{
            padding: '2rem',
            border: '1px solid #e5e5e5',
            borderRadius: '8px',
            backgroundColor: '#fff',
            cursor: 'pointer',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            fontSize: '1.2rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.5rem',
          }}
        >
          <span style={{ fontSize: '2rem' }}>🏈</span>
          Football
        </button>
      </div>
    </div>
  );
}
