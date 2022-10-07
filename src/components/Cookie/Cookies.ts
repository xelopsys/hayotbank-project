export const SetCookie = (name: string, value: boolean, days: number) => {
	const expires = new Date(Date.now() + days * 864e5).toUTCString();
	document.cookie = name + "=" + value + "; expires=" + expires + "; path=/";
};
export const GetCookie = (name: string) => {
	const value = "; " + document.cookie;
	const parts = value.split("; " + name + "=");
	if (parts.length === 2) return parts.pop()?.split(";").shift();
};

export const DeleteCookie = (name: string) => {
	document.cookie = name + "=; Max-Age=-99999999;";
};
