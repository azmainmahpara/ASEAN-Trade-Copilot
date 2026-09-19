export default function Home() {
  return (
    <main className="landing">
      <div className="frame" aria-hidden="true" />

      <svg
        className="trade-routes"
        viewBox="0 0 1000 800"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="500" cy="400" r="310" />
        <circle cx="500" cy="400" r="230" />
        <ellipse cx="500" cy="400" rx="130" ry="310" />
        <path d="M190 400h620M500 90v620M245 225c160 80 350 80 510 0M245 575c160-80 350-80 510 0" />
        <path className="route" d="M270 555Q355 170 725 260M270 555Q610 660 725 260" />
        <circle className="port" cx="270" cy="555" r="6" />
        <circle className="port" cx="725" cy="260" r="6" />
      </svg>

      <div className="wordmark">
        <svg className="brand-mark" viewBox="0 0 48 48" fill="none" aria-hidden="true">
          <path d="M8 34 24 8l16 26H8Z" />
          <path d="m8 34 16-9 16 9M24 8v17" />
          <circle cx="24" cy="25" r="4" />
        </svg>
        <h1>
          <span className="region">ASEAN</span>
          <span className="product">Trade <em>Copilot</em><span className="period">.</span></span>
        </h1>
        <div className="accent" aria-hidden="true" />
      </div>
    </main>
  );
}
