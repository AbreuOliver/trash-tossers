import React from "react";
import moment from "moment";

const currentDate = moment()
	.add(0, "hours")
	.format("dddd, MMMM D");

const thisFriday = moment()
	.day(+5)
	.format("dddd, MMMM D ");

const nextFriday = moment()
	.day(+12)
	.format("dddd, MMMM D ");

let dateToDisplay = "";

if (
	moment(currentDate).isBefore(thisFriday)
	// && moment(currentDate).isBefore(moment("19:00", "hh:mm"))
) {
	dateToDisplay = thisFriday;
} else {
	dateToDisplay = nextFriday;
}

console.log(dateToDisplay);

function Header() {
	return (
		<div className="header-container">
			<p>
				Next Pickup:{" "}
				<span className="next-Friday">{dateToDisplay}</span> at 7:00 PM
			</p>
		</div>
	);
}

export default Header;
