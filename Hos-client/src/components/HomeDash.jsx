import React from 'react'
import Table from 'react-bootstrap/Table';

function HomeDash() {
  return (
    <>
      <div className='mx-auto p-4'>
        <h3 className='text-xl font-semibold'>Dashboard</h3>
        <p className='text-gray-400'>Welcome back dr.alex</p>
      </div>
      <div className="container flex justify-between flex-col gap-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          <div className="bg-slate-100 rounded-lg px-5 py-4 shadow-sm flex flex-col">
            <h4 className="text-sm font-medium text-gray-500">Total Patients</h4>
            <h1 className="text-3xl font-bold text-gray-800 mt-2">17,354</h1>
            <h4 className="text-sm font-medium text-gray-500 text-green-500">+5%</h4>
          </div>

          <div className="bg-slate-100 rounded-lg p-5 py-4 shadow-sm flex flex-col">
            <h4 className="text-sm font-medium text-gray-500">New Admissions</h4>
            <h1 className="text-3xl font-bold text-gray-800 mt-2">1,245</h1>
            <h4 className="text-sm font-medium text-gray-500 text-green-500">+5%</h4>
          </div>

          <div className="bg-slate-100 rounded-lg p-5 py-4 shadow-sm flex flex-col">
            <h4 className="text-sm font-medium text-gray-500">Appointments Today</h4>
            <h1 className="text-3xl font-bold text-gray-800 mt-2">8,632</h1>
            <h4 className="text-sm font-medium text-gray-500 text-green-500">+5%</h4>
          </div>
        </div>

        <div>
          <h5 className='text-xl font-semibold'>Recent Activites</h5>
          <div className="border rounded-md overflow-hidden">
            <Table hover responsive className='mb-0'>
              <thead>
                <tr>

                  <th>Patient name</th>
                  <th>Appoiment date</th>
                  <th>Department</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>Otto</td>
                  <td><span className='bg-slate-200 p-1 px-3 rounded-md text-gray-600 text-sm'>Completed</span></td>
                </tr>
                <tr>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>Thornton</td>
                  <td><span className='bg-slate-200 p-1 px-3 rounded-md text-gray-600 text-sm'>Completed</span></td>

                </tr>
                <tr>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>Thornton</td>
                  <td><span className='bg-slate-200 p-1 px-3 rounded-md text-gray-600 text-sm'>Completed</span></td>

                </tr>
                <tr>
                  <td>Jacob</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td><span className='bg-slate-200 p-1 px-3 rounded-md text-gray-600 text-sm'>Completed</span></td>

                </tr>
                <tr>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                  <td><span className='bg-slate-200 p-1 px-3 rounded-md text-gray-600 text-sm'>Completed</span></td>

                </tr>
                <tr>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                  <td><span className='bg-slate-200 p-1 px-3 rounded-md text-gray-600 text-sm'>Completed</span></td>

                </tr>
                <tr>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                  <td><span className='bg-slate-200 p-1 px-3 rounded-md text-gray-600 text-sm'>Completed</span></td>

                </tr>

              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomeDash
