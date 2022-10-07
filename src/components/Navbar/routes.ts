export interface Page {
	name: string;
	path: string;
	id: number;
}

export const pages: Array<Page> = [
	{
		id: 1,
		name: "Home",
		path: "/",
	},
	{
		id: 2,
		name: "Profile",
		path: "/profile",
	},
	{
		id: 3,
		name: "News",
		path: "/news",
	},
];
