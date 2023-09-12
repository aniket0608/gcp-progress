import React from 'react'
import { DataCompletes } from '../assets/data'

function Count() {
  return (
    <div className="w-full flex justify-center items-center pt-4 py-2 flex-col">
				<div className="w-[60%] grid grid-cols-2">
					<p>Total Students : {DataCompletes.length}</p>
					<p>Total Redemptions : </p>
					<p>Total GenAI Completions : </p>
					<p>Total GCCF Completed : </p>
					<p>Totality Completions : </p>
					<p></p>
				</div>
			</div>
  )
}

export default Count