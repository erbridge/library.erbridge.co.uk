import type { LayoutLoad } from "./$types";

export const prerender = true;

export const load: LayoutLoad<{
	internalLinks: {
		href: string;
		pathPrefix: string;
		exact?: boolean;
		label: string;
	}[];
	externalLink: {
		href: string;
		label: string;
		rel?: string[];
	};
}> = () => ({
	internalLinks: [
		{ href: "/", pathPrefix: "/", exact: true, label: "library" },
		{ href: "/read", pathPrefix: "/read", label: "read" },
	],
	externalLink: { href: "https://erbridge.co.uk/", label: "home", rel: ["me"] },
});
