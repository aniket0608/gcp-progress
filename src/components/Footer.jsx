import React from "react";
import { Icons } from "../assets/Menus";
import SocialIcons from "./SocialIcons";

function Footer() {
	return (
		<footer className="text-center text-white bg-[#f1f1f1] flex flex-col ">
			<div className="py-4">
				<SocialIcons Icons={Icons} />
			</div>
			<div className="text-center text-dark p-3">
				<a
					className="text-dark"
					href="https://gdsc.community.dev/national-forensic-sciences-university-delhi/"
				>
					&copy; GDSC-NFSU Team
				</a>
			</div>
		</footer>
	);
}

export default Footer;
