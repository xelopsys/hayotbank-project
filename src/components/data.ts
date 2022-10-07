interface Data {
	slug: string;
	title: string;
	description: string;
	createdAt: Date;
	img?: string;
	keywords?: string[];
	social_link?: string;
}
interface Datalist extends Array<Data> {}
export const data: Datalist = [
	{
		slug: "slug",
		title: "title",
		description: "description",
		createdAt: new Date(),
		img: "img",
		keywords: ["keyword1", "keyword2"],
		social_link: "social_link",
	},
];
