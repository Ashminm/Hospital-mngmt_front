import React from 'react'
import Table from 'react-bootstrap/Table';

function HomeDash() {
  return (
    <>
      <div>
        <h3>Dashboard</h3>
        <p className='text-gray-400'>Welcome back dr.alex</p>
      </div>
      <div className="flex justify-between flex-col gap-4">
        <div className="flex justify-between gap-3">
          <div className="bg-slate-100 w-full rounded-md p-3">
            <h4>Total patients</h4>
            <h1>17354</h1>
          </div>
          <div className="bg-slate-100 w-full rounded-md p-3">
            <h4>Total patients</h4>
            <h1>17354</h1>

          </div>
          <div className="bg-slate-100 w-full rounded-md p-3">
            <h4>Total patients</h4>
            <h1>17354</h1>

          </div>
        </div>
        <div>
          <h5>Recent Activites</h5>
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
