"use client";

import { useState } from "react";

interface PlanItem {
  day: string;
  exercise: string;
  reps: string;
  rest: string;
}

export default function Page() {
  const [weight, setWeight] = useState("");
  const [goal, setGoal] = useState("");
  const [stats, setStats] = useState("");
  const [plan, setPlan] = useState<PlanItem[] | null>(null);

  const generatePlan = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    const newPlan: PlanItem[] = days.map((day) => ({
      day,
      exercise: "Bodyweight exercises",
      reps: "3 x 10",
      rest: "60s",
    }));
    setPlan(newPlan);
  };

  const exportPDF = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Weekly Training Plan Generator</h1>
      <form
        onSubmit={generatePlan}
        style={{ display: "flex", flexDirection: "column", gap: "1rem", maxWidth: "400px" }}
      >
        <label>
          Weight (kg or lbs):
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            style={{ width: "100%" }}
          />
        </label>
        <label>
          Goal:
          <input
            type="text"
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            style={{ width: "100%" }}
          />
        </label>
        <label>
          Current Stats:
          <input
            type="text"
            value={stats}
            onChange={(e) => setStats(e.target.value)}
            style={{ width: "100%" }}
          />
        </label>
        <button
          type="submit"
          style={{ padding: "0.5rem", backgroundColor: "#0070f3", color: "white", border: "none" }}
        >
          Generate Plan
        </button>
      </form>
      {plan && (
        <div style={{ marginTop: "2rem" }} id="plan">
          <h2>Your 7-Day Plan</h2>
          <table style={{ borderCollapse: "collapse", width: "100%" }}>
            <thead>
              <tr>
                <th style={{ border: "1px solid #ccc", padding: "0.5rem" }}>Day</th>
                <th style={{ border: "1px solid #ccc", padding: "0.5rem" }}>Exercise</th>
                <th style={{ border: "1px solid #ccc", padding: "0.5rem" }}>Reps</th>
                <th style={{ border: "1px solid #ccc", padding: "0.5rem" }}>Rest</th>
              </tr>
            </thead>
            <tbody>
              {plan.map((item) => (
                <tr key={item.day}>
                  <td style={{ border: "1px solid #ccc", padding: "0.5rem" }}>{item.day}</td>
                  <td style={{ border: "1px solid #ccc", padding: "0.5rem" }}>{item.exercise}</td>
                  <td style={{ border: "1px solid #ccc", padding: "0.5rem" }}>{item.reps}</td>
                  <td style={{ border: "1px solid #ccc", padding: "0.5rem" }}>{item.rest}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <button
            onClick={exportPDF}
            style={{ marginTop: "1rem", padding: "0.5rem", backgroundColor: "#0070f3", color: "white", border: "none" }}
          >
            Export as PDF
          </button>
        </div>
      )}
    </div>
  );
}
