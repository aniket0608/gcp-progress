import React from "react";
import { Date } from "../assets/data";

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
					<span className="text-2xl"> Google Cloud&nbsp;</span>
					<b>
						<span class="text-3xl"> STUDY JAMS 23 - 24 </span>
					</b>
				</div>
			</h4>
			<div className="flex flex-row justify-center items-center mb-5">
				<span className="text-xl text-stone-800">
					Last Updated on :&nbsp;
				</span>
				<span className="text-xl text-stone-800"> {Date} </span>
			</div>
			<div className="alert-slider w-[70%] m-auto mt-6 mb-0 bg-blue-300 text-red-600 rounded-3xl">
				<marquee className="text-lg pt-2">
					The score will be updated every day between 6 p.m and 8 p.m
				</marquee>
			</div>
		</div>
	);
}

export default TopBar;
