"use client";

import React, { useState } from 'react';

interface PlanItem {
  day: string;
  exercise: string;
  reps: string;
  rest: string;
}

export default function PlanGenerator() {
  const [weight, setWeight] = useState('');
  const [goal, setGoal] = useState('');
  const [stats, setStats] = useState('');
  const [plan, setPlan] = useState<PlanItem[] | null>(null);

  const generatePlan = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const days = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
    const newPlan: PlanItem[] = days.map(day => ({
      day,
      exercise: 'Bodyweight exercises',
      reps: '3 sets of 10',
      rest: '60 seconds',
    }));
    setPlan(newPlan);
  };

  const exportPDF = () => {
    window.print();
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '2rem' }}>
      <h1>Weekly Training Plan Generator</h1>
      <form onSubmit={generatePlan} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <label>
          Weight:
          <input type="text" value={weight} onChange={e => setWeight(e.target.value)} required />
        </label>
        <label>
          Goal:
          <input type="text" value={goal} onChange={e => setGoal(e.target.value)} required />
        </label>
        <label>
          Current Stats:
          <input type="text" value={stats} onChange={e => setStats(e.target.value)} required />
        </label>
        <button type="submit">Generate Plan</button>
      </form>
      {plan && (
        <div style={{ marginTop: '2rem' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <th style={{ border: '1px solid #ddd', padding: '8px' }}>Day</th>
                <th style={{ border: '1px solid #ddd', padding: '8px' }}>Exercise</th>
                <th style={{ border: '1px solid #ddd', padding: '8px' }}>Reps</th>
                <th style={{ border: '1px solid #ddd', padding: '8px' }}>Rest</th>
              </tr>
            </thead>
            <tbody>
              {plan.map((item, idx) => (
                <tr key={idx}>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>{item.day}</td>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>{item.exercise}</td>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>{item.reps}</td>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>{item.rest}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <button onClick={exportPDF} style={{ marginTop: '1rem' }}>Export as PDF</button>
        </div>
      )}
    </div>
  );
}
