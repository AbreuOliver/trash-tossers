import React from "react";
import moment from "moment";

const nextFriday = moment()
	.day(+5)
	.format("dddd, MMMM D ");

function Header() {
	return (
		<div className="header-container">
			<p>
				Next Pickup: <span className="next-Friday">{nextFriday}</span>{" "}
				at 7:00 PM
			</p>
		</div>
	);
}

export default Header;
