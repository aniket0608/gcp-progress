import React, { useState } from "react";
import { DataCompletes } from "../assets/data";

function DataTable() {
	const [searchTerm, setSearchTerm] = useState("");
	const [totalCompletionFilter, setTotalCompletionFilter] = useState(false);
	const [redemptionStatusFilter, setRedemptionStatusFilter] = useState(false);

	const handleSearch = (event) => {
		setSearchTerm(event.target.value);
	};

	const handleTotalCompletionClick = () =>
		setTotalCompletionFilter(!totalCompletionFilter);
	const handleRedemptionStatusClick = () =>
		setRedemptionStatusFilter(!redemptionStatusFilter);

	let filteredData = DataCompletes.filter((datacomplete) =>
		datacomplete["Student Name"]
			.toLowerCase()
			.includes(searchTerm.toLowerCase())
	);
	if (totalCompletionFilter) {
		filteredData = filteredData.filter(
			(dataComplete) =>
				dataComplete[
					"Total Completions of both Pathways"
				].toLowerCase() === "yes"
		);
	}

	if (redemptionStatusFilter) {
		filteredData = filteredData.filter(
			(dataComplete) =>
				dataComplete["Redemption Status"].toLowerCase() === "yes"
		);
	}

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
			<div className="w-full flex justify-center items-center pt-4 py-2 flex-row">
				<div class="buttons flex justify-around top-5 left-5">
					<button
						class="btn text-black"
						onClick={handleRedemptionStatusClick}
					>
						<span className="w-full h-full absolute left-0 top-0 m-0 p-0 z-[1]"></span>
						<p
							className="after:text-black"
							data-start="good luck!"
							data-text="Filter"
							data-title="Redeemed"
						></p>
					</button>
				</div>
				<div class="buttons flex justify-around top-5 left-5">
					<button
						class="btn text-black"
						onClick={handleTotalCompletionClick}
					>
						<span className="w-full h-full absolute left-0 top-0 m-0 p-0 z-[1]"></span>
						<p
							className="after:text-black"
							data-start="good luck!"
							data-text="Filter"
							data-title="Completed"
						></p>
					</button>
				</div>
			</div>
			<div className="py-5 px-0 max-w-7xl md:px-4 w-full flex items-center justify-center mx-auto">
				<table class="table table-hover fa-border">
					<thead>
						<tr>
							<th scope="col">
								<b>#</b>
							</th>
							<th scope="col">
								<b>Name</b>
							</th>
							<th scope="col">
								<b>Course</b>
							</th>
							<th scope="col">
								<b>Skill</b>
							</th>
							<th scope="col">
								<b>Gen AI</b>
							</th>
							<th scope="col">
								<b>Totality</b>
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
								<td className="whitespace-nowrap">
									{datacomplete["Sl no."]}
								</td>
								<td className="whitespace-nowrap">
									{datacomplete["Student Name"]}
								</td>
								<td className="whitespace-nowrap">
									{datacomplete["# of Courses Completed"]}
								</td>
								<td className="whitespace-nowrap">
									{
										datacomplete[
											"# of Skill Badges Completed"
										]
									}
								</td>
								<td className="whitespace-nowrap">
									{datacomplete["# of GenAI Game Completed"]}
								</td>
								<td className="whitespace-nowrap">
									{datacomplete[
										"Total Completions of both Pathways"
									] === "Yes"
										? "✅"
										: "❌"}
								</td>
								<td className="whitespace-nowrap">
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
