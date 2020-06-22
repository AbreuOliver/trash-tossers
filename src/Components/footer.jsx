import React from "react";

function Footer() {
	return (
		<div className="footer-container">
			<div className="footer-area">
				{" "}
				Copyright © Trash Tossers, LLC  2018-{new Date().getFullYear()} All
				rights reserved.
			</div>
		</div>
	);
}

export default Footer;
