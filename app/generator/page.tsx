'use client'

import { useRouter } from 'next/navigation';

export default function GeneratorSelection() {
  const router = useRouter();
  const positions = [
    'Quarterback',
    'Running Back',
    'Wide Receiver',
    'Tight End',
    'Offensive Line',
    'Defensive Line',
    'Linebacker',
    'Cornerback',
    'Safety',
    'Kicker',
    'Punter',
  ];

  const handleClick = (pos: string) => {
    // In the future we might pass the selected sport and position as query parameters.
    router.push('/generator/plan');
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem', textAlign: 'center' }}>
      <h1>Select Your Sport and Position</h1>
      <p>Please choose your sport and position to generate a custom training plan.</p>

      {/* Sport section */}
      <div style={{ marginTop: '2rem' }}>
        <h2>Football</h2>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1rem',
            justifyContent: 'center',
            marginTop: '1rem',
          }}
        >
          {positions.map((pos) => (
            <button
              key={pos}
              onClick={() => handleClick(pos)}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                width: '140px',
                height: '120px',
                padding: '1rem',
                borderRadius: '12px',
                border: '1px solid #ccc',
                backgroundColor: '#ffffff',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                cursor: 'pointer',
                transition: 'transform 0.1s, box-shadow 0.2s',
              }}
              onMouseOver={(e) => {
                const target = e.currentTarget as HTMLButtonElement;
                target.style.transform = 'translateY(-4px)';
                target.style.boxShadow = '0 4px 8px rgba(0,0,0,0.15)';
              }}
              onMouseOut={(e) => {
                const target = e.currentTarget as HTMLButtonElement;
                target.style.transform = '';
                target.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
              }}
            >
              <span style={{ fontSize: '2rem' }}>🏈</span>
              <span style={{ marginTop: '0.5rem' }}>{pos}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
