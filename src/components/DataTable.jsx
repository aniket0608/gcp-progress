import React from 'react'
import { DataCompletes } from '../assets/data'

function DataTable() {
  return (
    <div className='py-5 px-0 max-w-7xl md:px-4 w-full'>
        <table class="table table-hover fa-border">
              <thead>
                <tr>
                  <th scope="col"><b>Sr. No.</b></th>
                  <th scope="col"><b>Name</b></th>
                  <th scope="col"><b>Course Completed</b></th>
                  {/* <th scope="col"><b>Skill Badge</b></th> */}
                  <th scope="col"><b>Gen AI Completed</b></th>
                  <th scope="col"><b>Path Completed</b></th>
                  <th scope="col"><b>Redemption</b></th>
                </tr>
              </thead>
              <tbody id="gccp_body">
                {DataCompletes.map((datacomplete) => (
                    <tr>
                        <th scope="row">{datacomplete['Sl no.']}</th>
                        <td>{datacomplete['Student Name']}</td>
                        <td>{datacomplete["# of Courses Completed"]}</td>
                        {/* <td>{datacomplete['# of Skill Badges Completed']}</td> */}
                        <td>{datacomplete['# of GenAI Game Completed']}</td>
                        <td>{datacomplete['Total Completions of both Pathways']}</td>
                        <td>{datacomplete['Redemption Status']}</td>
                    </tr>
                ))}                
              </tbody>
            </table>
    </div>
  )
}

export default DataTable