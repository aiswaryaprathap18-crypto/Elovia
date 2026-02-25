import { useRef } from "react"
import "./FullScreenPlayer.css"

export default function FullScreenPlayer({ movie, onBack }) {

  const videoRef = useRef(null)

  const handleBack = () => {
    if (videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }

    onBack()
  }

  return (
    <div className="fullscreen-container">

      <button 
        className="back-btn"
        onClick={handleBack}
      >
        ← Back
      </button>

      <video
        ref={videoRef}
        src={movie.trailer}
        autoPlay
        controls
        className="fullscreen-video"
      />

    </div>
  )
}