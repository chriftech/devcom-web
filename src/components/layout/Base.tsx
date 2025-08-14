import React, {useEffect, useState} from 'react'
import ReactConfetti from 'react-confetti';

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
      {showConfetti && (
        <ReactConfetti
          style={{ width: "100%" }}
          numberOfPieces={330}
          initialVelocityX={4}
          initialVelocityY={10}
          friction={1.01}
        />
      )}
      <section className="flex justify-between items-center bg-blue-500 p-2">
        <div>
          <a href='/' className="text-[15pt] text-white">TXT-Logo</a>
        </div>
        <div className="flex justify-center items-center gap-4 text-white font-bold">
          <a href="/about-us" className="md:text-[12pt] text-[8pt]">About us</a>
          <a href="/contact-us" className="md:text-[12pt] text-[8pt]">Support</a>
          <a href="#/" className="md:text-[12pt] text-[8pt]">Statistics</a>
          <a href="/plans" className="md:text-[12pt] text-[8pt]">Pricing</a>
          {/* <a href="" className="text-[12pt]">workspace</a> */}
        </div>
        <div>
          <img className='rounded-full md:h-10 md:w-10 h-8 w-8 lg:h-12 lg:w-12 cursor-pointer' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSecWFwNqqM7uIjorZo32oIEfywcGtkB5JAsw&s" alt="profile photo" />
        </div>
      </section>
      {component}
    </React.Fragment>
  )
}

export default BaseLayout
