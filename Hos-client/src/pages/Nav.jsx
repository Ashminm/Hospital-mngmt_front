import React from 'react'

function Nav() {
  return (
    <div className="border-b border-slate-300  p-2 pt-0">
    <div className="grid grid-cols-2 sm:grid-cols-6 items-center gap-2">
      <h3 className="font-bold tracking-tight text-blue-400 flex items-center">
        <i className="fa-solid fa-stethoscope mr-2"></i> Care
      </h3>
      <h4 className="text-gray-400 col-span-1 sm:col-span-5 text-sm sm:text-base">
        Welcome Alex
      </h4>
      {/* <h5 className="text-gray-400 text-right">A</h5> */}
    </div>
  </div>
  
  )
}

export default Nav
