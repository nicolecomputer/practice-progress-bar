import React from 'react';
import './App.css'

type ProgressBarProps = {
  percentage: number
}
export function ProgressBar({ percentage }: ProgressBarProps) {
  const filled = `${percentage}%`
  return <div className="progress">
    <div className="bar" style={{
      width: `${filled}`
    }}>
      <div className='percentage-container'>
        <p className={
          ['percentage',
            percentage > 5 ? "" : "hidden"
          ].join(" ")}>{filled}</p>
      </div>
    </div>
  </div>;
}

export default function App() {
  const [filled, setFilled] = React.useState<number>(10);
  return (
    <div>
      <h2>Progress So Far</h2>
      <ProgressBar percentage={filled} />
      <div className="progress-control">
        <button
          onClick={() => {
            setFilled(Math.max(0, filled - 5));
          }}
          disabled={filled == 0}
        >A little less</button>
        <button
          onClick={() => {
            setFilled(Math.min(100, filled + 5));
          }}
          disabled={filled == 100}
        >A little more</button>
      </div>
    </div>
  )
}
