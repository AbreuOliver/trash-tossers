import React from "react";

function Footer() {
	return (
		<div className="footer-container">
			<div className="footer-area">
				{" "}
				Copyright © {new Date().getFullYear()} Trash Tossers, LLC. All
				rights reserved.
			</div>
		</div>
	);
}

export default Footer;
