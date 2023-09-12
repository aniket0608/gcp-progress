import React, { useState } from "react";
import { DataCompletes } from "../assets/data";

function DataTable() {
	const [searchTerm, setSearchTerm] = useState("");

	const handleSearch = (event) => {
		setSearchTerm(event.target.value);
	};

	const filteredData = DataCompletes.filter((datacomplete) =>
		datacomplete["Student Name"]
			.toLowerCase()
			.includes(searchTerm.toLowerCase())
	);
	return (
		<>
			<div className="w-full flex justify-center items-center pt-4">
				<input
					className="w-[80%] h-10 p-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-blue-500 text-lg"
					type="text"
					onChange={handleSearch}
					placeholder="Search by name..."
				/>
			</div>
			<div className="py-5 px-0 max-w-7xl md:px-4 w-full flex items-center justify-center mx-auto">
				<table class="table table-hover fa-border">
					<thead>
						<tr>
							<th scope="col">
								<b>Sr. No.</b>
							</th>
							<th scope="col">
								<b>Name</b>
							</th>
							<th scope="col">
								<b>Course Completed</b>
							</th>
							{/* <th scope="col"><b>Skill Badge</b></th> */}
							<th scope="col">
								<b>Gen AI Completed</b>
							</th>
							<th scope="col">
								<b>Path Completed</b>
							</th>
							<th scope="col">
								<b>Redemption</b>
							</th>
						</tr>
					</thead>
					<tbody id="gccp_body">
						{filteredData.map((datacomplete) => (
							<tr
								className={
									datacomplete[
										"Total Completions of both Pathways"
									] === "Yes"
										? "bg-green-200"
										: ""
								}
							>
								<th scope="row">{datacomplete["Sl no."]}</th>
								<td>{datacomplete["Student Name"]}</td>
								<td>
									{datacomplete["# of Courses Completed"]}
								</td>
								{/* <td>{datacomplete['# of Skill Badges Completed']}</td> */}
								<td>
									{datacomplete["# of GenAI Game Completed"]}
								</td>
								<td>
									{datacomplete[
										"Total Completions of both Pathways"
									] === "Yes"
										? "✅"
										: "❌"}
								</td>
								<td>
									{datacomplete["Redemption Status"] === "Yes"
										? "☑️"
										: "❗️"}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</>
	);
}

export default DataTable;
