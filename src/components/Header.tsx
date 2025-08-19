import React from 'react'

function Header() {
  return (
    <section className="flex justify-between items-center bg-blue-500 p-2">
        <div>
          <a href='/' className="text-[15pt] text-white">Logo</a>
        </div>
        <div className="flex justify-center items-center gap-4 text-white font-bold">
          <a href="#about-us" className="md:text-[12pt] text-[8pt]">About us</a>
          <a href="/contact-us" className="md:text-[12pt] text-[8pt]">Support</a>
          <a href="#/" className="md:text-[12pt] text-[8pt]">demo</a>
          <a href="/plans" className="md:text-[12pt] text-[8pt]">Pricing</a>
          {/* <a href="" className="text-[12pt]">workspace</a> */}
        </div>
        <div>
          <img className='rounded-full md:h-10 md:w-10 h-8 w-8 lg:h-12 lg:w-12 cursor-pointer' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSecWFwNqqM7uIjorZo32oIEfywcGtkB5JAsw&s" alt="profile photo" />
        </div>
      </section>
  )
}

export default Header