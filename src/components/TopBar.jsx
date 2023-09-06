import React from "react";

function TopBar() {
	return (
		<div className="flex flex-col justify-center items-center">
			<h4 className="font-normal flex flex-row items-center justify-center">
				<img
					className="h-10 m-3 mr-1"
					src="https://raw.githubusercontent.com/Trident09/gcp-progress/main/src/assets/cloudLg.png"
					alt="cloud"
				/>
				<div className="h-full p-4 pl-0">
					<span> Google Cloud&nbsp;</span>
					<b>
						<span class="study"> STUDY </span>
						<span class="jams"> JAMS </span>
						<span class="num23"> 23 </span>
						<span class="sym-"> - </span>
						<span class="num24"> 24 </span>
					</b>
				</div>
			</h4>
		</div>
	);
}

export default TopBar;
