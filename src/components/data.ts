export interface Data {
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
		slug: "1-post",
		title: "New Post 1",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, esse? Fuga dolorum, neque maxime tempore id, iure dicta ipsa, excepturi quam quaerat temporibus debitis? Veritatis optio porro commodi magni repudiandae odio dignissimos quibusdam, necessitatibus, nostrum illum vitae. Minima consectetur error, labore et aspernatur mollitia quasi vel modi veniam tempore veritatis iure similique quibusdam, magnam qui maxime nesciunt debitis temporibus saepe explicabo soluta obcaecati illum alias. Aliquam saepe ex ipsa nemo facere. Impedit dicta reiciendis vitae et. Ut nemo natus eum iusto vero qui aspernatur id, possimus corrupti, ab recusandae blanditiis nesciunt cupiditate quidem libero consequatur unde vel in eligendi corporis",
		createdAt: new Date(),
		img: "https://i.pinimg.com/564x/69/25/7a/69257a365a188ccd3fd74a55c4d10b3a.jpg",
		keywords: ["keyword1", "keyword2"],
		social_link: "social_link",
	},
	{
		slug: "2-post",
		title: "New Post 2",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, esse? Fuga dolorum, neque maxime tempore id, iure dicta ipsa, excepturi quam quaerat temporibus debitis? Veritatis optio porro commodi magni repudiandae odio dignissimos quibusdam, necessitatibus, nostrum illum vitae. Minima consectetur error, labore et aspernatur mollitia quasi vel modi veniam tempore veritatis iure similique quibusdam, magnam qui maxime nesciunt debitis temporibus saepe explicabo soluta obcaecati illum alias. Aliquam saepe ex ipsa nemo facere. Impedit dicta reiciendis vitae et. Ut nemo natus eum iusto vero qui aspernatur id, possimus corrupti, ab recusandae blanditiis nesciunt cupiditate quidem libero consequatur unde vel in eligendi corporis",
		createdAt: new Date(),
		img: "https://i.pinimg.com/564x/69/25/7a/69257a365a188ccd3fd74a55c4d10b3a.jpg",
		keywords: ["keyword1", "keyword2"],
		social_link: "social_link",
	},
	{
		slug: "3-post",
		title: "New Post 3",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, esse? Fuga dolorum, neque maxime tempore id, iure dicta ipsa, excepturi quam quaerat temporibus debitis? Veritatis optio porro commodi magni repudiandae odio dignissimos quibusdam, necessitatibus, nostrum illum vitae. Minima consectetur error, labore et aspernatur mollitia quasi vel modi veniam tempore veritatis iure similique quibusdam, magnam qui maxime nesciunt debitis temporibus saepe explicabo soluta obcaecati illum alias. Aliquam saepe ex ipsa nemo facere. Impedit dicta reiciendis vitae et. Ut nemo natus eum iusto vero qui aspernatur id, possimus corrupti, ab recusandae blanditiis nesciunt cupiditate quidem libero consequatur unde vel in eligendi corporis",
		createdAt: new Date(),
		img: "https://i.pinimg.com/564x/69/25/7a/69257a365a188ccd3fd74a55c4d10b3a.jpg",
		keywords: ["keyword1", "keyword2"],
		social_link: "social_link",
	},
	{
		slug: "4-post",
		title: "New Post 4",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, esse? Fuga dolorum, neque maxime tempore id, iure dicta ipsa, excepturi quam quaerat temporibus debitis? Veritatis optio porro commodi magni repudiandae odio dignissimos quibusdam, necessitatibus, nostrum illum vitae. Minima consectetur error, labore et aspernatur mollitia quasi vel modi veniam tempore veritatis iure similique quibusdam, magnam qui maxime nesciunt debitis temporibus saepe explicabo soluta obcaecati illum alias. Aliquam saepe ex ipsa nemo facere. Impedit dicta reiciendis vitae et. Ut nemo natus eum iusto vero qui aspernatur id, possimus corrupti, ab recusandae blanditiis nesciunt cupiditate quidem libero consequatur unde vel in eligendi corporis",
		createdAt: new Date(),
		img: "https://i.pinimg.com/564x/69/25/7a/69257a365a188ccd3fd74a55c4d10b3a.jpg",
		keywords: ["keyword1", "keyword2"],
		social_link: "social_link",
	},
	{
		slug: "5-post",
		title: "New Post 5",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, esse? Fuga dolorum, neque maxime tempore id, iure dicta ipsa, excepturi quam quaerat temporibus debitis? Veritatis optio porro commodi magni repudiandae odio dignissimos quibusdam, necessitatibus, nostrum illum vitae. Minima consectetur error, labore et aspernatur mollitia quasi vel modi veniam tempore veritatis iure similique quibusdam, magnam qui maxime nesciunt debitis temporibus saepe explicabo soluta obcaecati illum alias. Aliquam saepe ex ipsa nemo facere. Impedit dicta reiciendis vitae et. Ut nemo natus eum iusto vero qui aspernatur id, possimus corrupti, ab recusandae blanditiis nesciunt cupiditate quidem libero consequatur unde vel in eligendi corporis",
		createdAt: new Date(),
		img: "https://i.pinimg.com/564x/69/25/7a/69257a365a188ccd3fd74a55c4d10b3a.jpg",
		keywords: ["keyword1", "keyword2"],
		social_link: "social_link",
	},
	{
		slug: "6-post",
		title: "New Post 6",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, esse? Fuga dolorum, neque maxime tempore id, iure dicta ipsa, excepturi quam quaerat temporibus debitis? Veritatis optio porro commodi magni repudiandae odio dignissimos quibusdam, necessitatibus, nostrum illum vitae. Minima consectetur error, labore et aspernatur mollitia quasi vel modi veniam tempore veritatis iure similique quibusdam, magnam qui maxime nesciunt debitis temporibus saepe explicabo soluta obcaecati illum alias. Aliquam saepe ex ipsa nemo facere. Impedit dicta reiciendis vitae et. Ut nemo natus eum iusto vero qui aspernatur id, possimus corrupti, ab recusandae blanditiis nesciunt cupiditate quidem libero consequatur unde vel in eligendi corporis",
		createdAt: new Date(),
		img: "https://i.pinimg.com/564x/69/25/7a/69257a365a188ccd3fd74a55c4d10b3a.jpg",
		keywords: ["keyword1", "keyword2"],
		social_link: "social_link",
	},
	{
		slug: "7-post",
		title: "New Post 7",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, esse? Fuga dolorum, neque maxime tempore id, iure dicta ipsa, excepturi quam quaerat temporibus debitis? Veritatis optio porro commodi magni repudiandae odio dignissimos quibusdam, necessitatibus, nostrum illum vitae. Minima consectetur error, labore et aspernatur mollitia quasi vel modi veniam tempore veritatis iure similique quibusdam, magnam qui maxime nesciunt debitis temporibus saepe explicabo soluta obcaecati illum alias. Aliquam saepe ex ipsa nemo facere. Impedit dicta reiciendis vitae et. Ut nemo natus eum iusto vero qui aspernatur id, possimus corrupti, ab recusandae blanditiis nesciunt cupiditate quidem libero consequatur unde vel in eligendi corporis",
		createdAt: new Date(),
		img: "https://i.pinimg.com/564x/69/25/7a/69257a365a188ccd3fd74a55c4d10b3a.jpg",
		keywords: ["keyword1", "keyword2"],
		social_link: "social_link",
	},
	{
		slug: "8-post",
		title: "New Post 8",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, esse? Fuga dolorum, neque maxime tempore id, iure dicta ipsa, excepturi quam quaerat temporibus debitis? Veritatis optio porro commodi magni repudiandae odio dignissimos quibusdam, necessitatibus, nostrum illum vitae. Minima consectetur error, labore et aspernatur mollitia quasi vel modi veniam tempore veritatis iure similique quibusdam, magnam qui maxime nesciunt debitis temporibus saepe explicabo soluta obcaecati illum alias. Aliquam saepe ex ipsa nemo facere. Impedit dicta reiciendis vitae et. Ut nemo natus eum iusto vero qui aspernatur id, possimus corrupti, ab recusandae blanditiis nesciunt cupiditate quidem libero consequatur unde vel in eligendi corporis",
		createdAt: new Date(),
		img: "https://i.pinimg.com/564x/69/25/7a/69257a365a188ccd3fd74a55c4d10b3a.jpg",
		keywords: ["keyword1", "keyword2"],
		social_link: "social_link",
	},
];
