import React, {useEffect, useState} from 'react'
import ReactConfetti from 'react-confetti';
import Footer from '../Footer';
import Header from '../Header';

const BaseLayout = ({ component }: {component: React.ReactNode}) => {
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowConfetti(false);
    }, 6000)
    return () => clearTimeout(timer);
  }, [])

  return (
    <React.Fragment>
      {/* {showConfetti && (
        <ReactConfetti
          style={{ width: "100%" }}
          numberOfPieces={330}
          initialVelocityX={4}
          initialVelocityY={10}
          friction={1.01}
        />
      )} */}
      <Header />
      {component}
      <Footer />
    </React.Fragment>
  )
}

export default BaseLayout
