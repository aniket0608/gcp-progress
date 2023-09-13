import React from "react";
import { DataCompletes } from "../assets/data";

function Count() {
	let redeemedStudents = DataCompletes.filter((datacomplete) =>
		datacomplete["Redemption Status"].toLowerCase().includes("yes")
	);
	let genAICompletions = DataCompletes.filter((datacomplete) =>
		datacomplete["# of GenAI Game Completed"].includes("1")
	);
	let totalCompletions = DataCompletes.filter((datacomplete) =>
		datacomplete["Total Completions of both Pathways"]
			.toLowerCase()
			.includes("yes")
	);
	let GCCFCompletions = DataCompletes.filter(
		(datacomplete) =>
			datacomplete["# of Courses Completed"].includes("4") &&
			datacomplete["# of Skill Badges Completed"].includes("4")
	);
	return (
		<div className="w-full flex justify-center items-center pt-4 py-2 flex-col">
			<div className="w-[60%] grid grid-cols-2">
				<p>Total Students : {DataCompletes.length}</p>
				<p>Total Redemptions : {redeemedStudents.length}</p>
				<p>Total GenAI Completions : {genAICompletions.length}</p>
				<p>Total GCCF Completed : {GCCFCompletions.length}</p>
				<p>Totality Completions : {totalCompletions.length}</p>
			</div>
		</div>
	);
}

export default Count;
