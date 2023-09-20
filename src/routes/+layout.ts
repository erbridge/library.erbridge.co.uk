import type { LayoutLoad } from "./$types";

export const prerender = true;

export const load: LayoutLoad<{
	internalLinks: {
		href: string;
		pathPrefix: string;
		exact?: boolean;
		label: string;
	}[];
}> = () => ({
	internalLinks: [{ href: "/", pathPrefix: "/", exact: true, label: "home" }],
});
