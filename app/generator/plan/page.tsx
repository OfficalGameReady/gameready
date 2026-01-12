"use client";

import React, { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

interface PlanItem {
  day: string;
  exercise: string;
  reps: string;
  rest: string;
}

export default function PlanGenerator() {
  const params = useSearchParams();
  const position = params.get('position') || '';

  const [weight, setWeight] = useState('');
  const [goal, setGoal] = useState('');
  const [stats, setStats] = useState('');
  const [plan, setPlan] = useState<PlanItem[] | null>(null);

  const getExercisesForPosition = (pos: string): string[] => {
    switch (pos.toLowerCase()) {
      case 'wr':
      case 'wide receiver':
        return ['Sprint drills', 'Route running', 'Agility ladder', 'Plyometric jumps'];
      case 'rb':
      case 'running back':
        return ['Deadlifts', 'Squats', 'Sled pushes', 'Jump rope'];
      case 'qb':
      case 'quarterback':
        return ['Long throws', 'Footwork drills', 'Shoulder mobility', 'Sprints'];
      default:
        return [];
    }
  };

  const getWorkoutParams = (goal: string): { reps: string; rest: string } => {
    const lower = goal.toLowerCase();
    if (lower.includes('lose fat') || lower.includes('fat')) {
      return { reps: '3 sets of 15 reps', rest: '30 seconds' };
    }
    // default or build muscle
    return { reps: '3 sets of 10 reps', rest: '60 seconds' };
  };

  const generatePlan = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const exercises = getExercisesForPosition(position);
    const { reps, rest } = getWorkoutParams(goal);
    const newPlan: PlanItem[] = days.map((day, index) => ({
      day,
      exercise: exercises[index % exercises.length],
      reps,
      rest,
    }));
    setPlan(newPlan);
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div style={{ padding: '1rem' }}>
        <h1>Personalized Training Plan</h1>
        <form onSubmit={generatePlan} style={{ marginBottom: '1rem' }}>
          <div>
            <label>
              Weight (lbs):&nbsp;
              <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} required />
            </label>
          </div>
          <div>
            <label>
              Goal:&nbsp;
              <input
                type="text"
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
                placeholder="e.g. Lose fat, Build muscle"
                required
              />
            </label>
          </div>
          <div>
            <label>
              Current Stats:&nbsp;
              <input
                type="text"
                value={stats}
                onChange={(e) => setStats(e.target.value)}
                placeholder="e.g. 40yd dash time, bench max"
              />
            </label>
          </div>
          <button type="submit">Generate Plan</button>
        </form>
        {plan && (
          <table border={1} cellPadding={8} cellSpacing={0}>
            <thead>
              <tr>
                <th>Day</th>
                <th>Exercise</th>
                <th>Reps</th>
                <th>Rest</th>
              </tr>
            </thead>
            <tbody>
              {plan.map((item, index) => (
                <tr key={index}>
                  <td>{item.day}</td>
                  <td>{item.exercise}</td>
                  <td>{item.reps}</td>
                  <td>{item.rest}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </Suspense>
  );
}
