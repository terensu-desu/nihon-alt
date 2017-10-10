import { EventEmitter } from "events"

class RecentUploadsStore extends EventEmitter{
	constructor(){
		super()

		this.uploadList = [
			{
				title: "Guess Who Mario Version!",
				author: "Thomas T.",
				text: "Students will enjoy and master the grammar with this!",
				level: "Year 1"
			},
			{
				title: "Guess Who Gundam Version!",
				author: "Palmer C.",
				text: "Students will enjoy and master the grammar with this!",
				level: "Year 2"
			},
			{
				title: "Guess Who Sailor Moon Version!",
				author: "Walt S.",
				text: "Students will enjoy and master the grammar with this!",
				level: "Year 3"
			},
			{
				title: "Guess Who One Piece Version!",
				author: "Jill K.",
				text: "Students will enjoy and master the grammar with this!",
				level: "Special Needs"
			},
			{
				title: "Battleship One Piece Version!",
				author: "Jill K.",
				text: "Students will enjoy and master the grammar with this!",
				level: "Special Needs"
			}
		]

	}

	getList() {
		return this.uploadList;
	}

}

const recentList = new RecentUploadsStore()
export default recentList