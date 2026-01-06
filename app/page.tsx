import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-inner">
          <h1>
            <span className="text-box title-box">Game Ready</span>
          </h1>
          <p>
            <span className="text-box subtitle-box">Sport-specific training for high school athletes.</span>
          </p>

          <div>
            <a className="down-link text-box small" href="#why">Scroll to Why ▾</a>
          </div>
        </div>
      </section>

      <main className="content-wrap">
        <section id="why" className="why-section">
          <div className="why-inner">
            <div className="why-left">
              <h2>Why Game Ready</h2>
              <p className="lead">
                Train with confidence: tailored plans, measurable goals, and
                progress tracking built for your sport and position.
              </p>
              <a className="down-link" href="#cta">See the plan ↓</a>
            </div>

            <div className="why-right">
              <div className="feature-card">
                <div className="icon">🏈</div>
                <div className="feature-content">
                  <h4>Sport-specific</h4>
                  <p className="muted">Plans tuned to positions and game demands.</p>
                </div>
              </div>

              <div className="feature-card">
                <div className="icon">📈</div>
                <div className="feature-content">
                  <h4>Progress Tracking</h4>
                  <p className="muted">See measurable improvements over time.</p>
                </div>
              </div>

              <div className="feature-card">
                <div className="icon">🛡️</div>
                <div className="feature-content">
                  <h4>Safety First</h4>
                  <p className="muted">Programs built with proper progression and recovery.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="cta" className="cta-box">
          <div className="cta-inner">
            <h3>Ready to get started?</h3>
            <p>Generate a custom workout plan tailored to your sport and position.</p>
            <div>
              <Link href="/generator" className="cta-button">Generate a workout plan</Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}