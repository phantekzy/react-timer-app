import { Input } from './components/forms/Input.jsx'
import { useState, useEffect } from 'react'

function App() {
  // State: how many seconds the timer should start with
  const [duration, setDuration] = useState(3)

  // State: how many seconds are left on the countdown
  const [secondsLeft, setSecondsLeft] = useState(duration)

  // Handle input change
  // - Updates the duration
  // - Resets the countdown to the new duration
  const handleChange = (v) => {
    setDuration(v)
    setSecondsLeft(v)
  }

  // Effect: starts the countdown
  useEffect(() => {
    // Create an interval that runs every second
    const timer = setInterval(() => {
      setSecondsLeft((v) => {
        if (v < 1) {
          // Stop timer when it reaches 0
          clearInterval(timer)
          alert('Timer done')
          return 0
        }
        // Otherwise, decrease by 1
        return v - 1
      })
    }, 1000)

    // Cleanup: stop the timer when component unmounts or duration changes
    return () => {
      clearInterval(timer)
    }
  }, [duration]) // Run effect again whenever duration changes

  // UI
  return (
    <div className="vstack gap-2">
      <Input
        value={duration}
        placeholder="Setting Timer..."
        onChange={handleChange}
      />
      <p>Timer: {secondsLeft}</p>
    </div>
  )
}

export default App

