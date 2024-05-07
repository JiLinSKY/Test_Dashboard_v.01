var sourceData = [
	{
		id: "1",
		employee_name: "Tiger Nixon",
		company: "Microsoft",
		phone_number: "(225) 555-0118",
		email: "jane@microsoft.com",
		country: "United States",
		status: "Inactive",
	},
	{
		id: "2",
		employee_name: "Floyd Miles",
		company: "Yahoo",
		phone_number: "(205) 555-0100",
		email: "floyd@yahoo.com",
		country: "Kiribati",
		status: "Inactive",
	},
	{
		id: "3",
		employee_name: "Ronald Richards",
		company: "Adobe",
		phone_number: "(302) 555-0107",
		email: "ronald@adobe.com",
		country: "Israel",
		status: "Active",
	},
	{
		id: "4",
		employee_name: "Marvin McKinney",
		company: "Tesla",
		phone_number: "(252) 555-0126",
		email: "marvin@tesla.com",
		country: "Iran",
		status: "Active",
	},
	{
		id: "5",
		employee_name: "Jerome Bell",
		company: "Google",
		phone_number: "(629) 555-0129",
		email: "jerome@google.com",
		country: "Réunion",
		status: "Active",
	},
	{
		id: "6",
		employee_name: "Kathryn Murphy",
		company: "Microsoft",
		phone_number: "(406) 555-0120",
		email: "kathryn@microsoft.com",
		country: "Curaçao",
		status: "Active",
	},
	{
		id: "7",
		employee_name: "Jacob Jones",
		company: "Yahoo",
		phone_number: "(208) 555-0112",
		email: "jacob@yahoo.com",
		country: "Brazil",
		status: "Inactive",
	},
	{
		id: "8",
		employee_name: "Kristin Watson",
		company: "Facebook",
		phone_number: "(704) 555-0127",
		email: "kristin@facebook.com",
		country: "Åland Islands",
		status: "Active",
	},
	{
		id: "9",
		employee_name: "Tiger Nixon",
		company: "Microsoft",
		phone_number: "(225) 555-0118",
		email: "jane@microsoft.com",
		country: "United States",
		status: "Active",
	},
	{
		id: "10",
		employee_name: "Kathryn Murphy",
		company: "Microsoft",
		phone_number: "(406) 555-0120",
		email: "kathryn@microsoft.com",
		country: "Curaçao",
		status: "Active",
	},
	{
		id: "11",
		employee_name: "Jacob Jones",
		company: "Yahoo",
		phone_number: "(208) 555-0112",
		email: "jacob@yahoo.com",
		country: "Brazil",
		status: "Inactive",
	},
	{
		id: "12",
		employee_name: "Floyd Miles",
		company: "Yahoo",
		phone_number: "(205) 555-0100",
		email: "floyd@yahoo.com",
		country: "Kiribati",
		status: "Inactive",
	},
	{
		id: "13",
		employee_name: "Jerome Bell",
		company: "Google",
		phone_number: "(629) 555-0129",
		email: "jerome@google.com",
		country: "Réunion",
		status: "Active",
	},
	{
		id: "14",
		employee_name: "Tiger Nixon",
		company: "Microsoft",
		phone_number: "(225) 555-0118",
		email: "jane@microsoft.com",
		country: "United States",
		status: "Active",
	},
	{
		id: "15",
		employee_name: "Marvin McKinney",
		company: "Tesla",
		phone_number: "(252) 555-0126",
		email: "marvin@tesla.com",
		country: "Iran",
		status: "Active",
	},
	{
		id: "16",
		employee_name: "Tiger Nixon",
		company: "Microsoft",
		phone_number: "(225) 555-0118",
		email: "jane@microsoft.com",
		country: "United States",
		status: "Active",
	},
	{
		id: "17",
		employee_name: "Jerome Bell",
		company: "Google",
		phone_number: "(629) 555-0129",
		email: "jerome@google.com",
		country: "Réunion",
		status: "Active",
	},
	{
		id: "18",
		employee_name: "Kathryn Murphy",
		company: "Microsoft",
		phone_number: "(406) 555-0120",
		email: "kathryn@microsoft.com",
		country: "Curaçao",
		status: "Active",
	},
	{
		id: "19",
		employee_name: "Jacob Jones",
		company: "Yahoo",
		phone_number: "(208) 555-0112",
		email: "jacob@yahoo.com",
		country: "Brazil",
		status: "Inactive",
	},
	{
		id: "20",
		employee_name: "Tiger Nixon",
		company: "Microsoft",
		phone_number: "(225) 555-0118",
		email: "jane@microsoft.com",
		country: "United States",
		status: "Active",
	},
	{
		id: "21",
		employee_name: "Marvin McKinney",
		company: "Tesla",
		phone_number: "(252) 555-0126",
		email: "marvin@tesla.com",
		country: "Iran",
		status: "Active",
	},
	{
		id: "22",
		employee_name: "Floyd Miles",
		company: "Yahoo",
		phone_number: "(205) 555-0100",
		email: "floyd@yahoo.com",
		country: "Kiribati",
		status: "Inactive",
	},
	{
		id: "23",
		employee_name: "Jacob Jones",
		company: "Yahoo",
		phone_number: "(208) 555-0112",
		email: "jacob@yahoo.com",
		country: "Brazil",
		status: "Inactive",
	},
]

function loadEmployees() {
	return {
		search: "",
		pageNumber: 0,
		size: 8,
		total: "",
		myForData: sourceData,

		get filteredEmployees() {
			const start = this.pageNumber * this.size,
				end = start + this.size

			if (this.search === "") {
				this.total = this.myForData.length
				return this.myForData.slice(start, end)
			}

			//Return the total results of the filters
			this.total = this.myForData.filter((item) => {
				return item.employee_name
					.toLowerCase()
					.includes(this.search.toLowerCase())
			}).length

			//Return the filtered data
			return this.myForData
				.filter((item) => {
					return item.employee_name
						.toLowerCase()
						.includes(this.search.toLowerCase())
				})
				.slice(start, end)
		},

		//Create array of all pages (for loop to display page numbers)
		pages() {
			return Array.from({
				length: Math.ceil(this.total / this.size),
			})
		},

		//Next Page
		nextPage() {
			this.pageNumber++
		},

		//Previous Page
		prevPage() {
			this.pageNumber--
		},

		//Total number of pages
		pageCount() {
			return Math.ceil(this.total / this.size)
		},

		//Return the start range of the paginated results
		startResults() {
			return this.pageNumber * this.size + 1
		},

		//Return the end range of the paginated results
		endResults() {
			let resultsOnPage = (this.pageNumber + 1) * this.size

			if (resultsOnPage <= this.total) {
				return resultsOnPage
			}

			return this.total
		},

		//Link to navigate to page
		viewPage(index) {
			this.pageNumber = index
		},
	}
}
