<script lang="ts">
	import { CategoryIndexPage } from "@erbridge/website-theme";

	const pages: {
		slug: string;
		title: string;
		subtitle?: string;
		extract?: string;
	}[] = [
		{
			slug: "read/user-error",
			title: "USER ERROR",
			extract:
				"I looked at the pair of figures lying motionless in the dark, damp room. Water dripped from a pipe nearby and the smell of blood filled my nostrils",
		},
		{
			slug: "read/the-groaning-worm-part-ii",
			title: "The Groaning Worm (Part II)",
			extract:
				"The magicians and phonetic monsters / Have their ministries; they waste alongside the terror, / Never tasting it; their exhortations are faltering",
		},
		{
			slug: "read/and-so-the-wheel-turns",
			title: "and so the wheel turns",
			extract:
				"And so the wheel turns. / The bracken breaks beneath my feet, / As these words roll over my tongue",
		},
		{
			slug: "read/under-the-light-of-a-dying-star",
			title: "under the light of a dying star",
			extract:
				"Under the light of a dying star, Aaron McBarnes sits in front of his television",
		},
		{
			slug: "read/for-your-safety",
			title: "for your safety",
			extract:
				"Thirty seven thousand feet. / THE VOMIT-METER, / says the mauve paper in the seat in front",
		},
		{
			slug: "read/the-tree",
			title: "the tree",
			extract:
				"The tree beckons. / Its twisted limbs reaching out, / calling, / summoning",
		},
		{
			slug: "read/face",
			title: "face",
			extract: "I wear it. / The face of happiness, / while it boils beneath",
		},
		{
			slug: "read/sessions",
			title: "sessions",
			extract:
				"Thoughts and feelings, / Overwhelming. passions and / Truths. multiple and deafening",
		},
		{
			slug: "read/dancers",
			title: "dancers",
			extract:
				"Cold skin, warm heart. / On a pedestal, exposed. Seen. / Curves and motion examined",
		},
		{
			slug: "read/coming-out",
			title: "coming out",
			extract:
				"I came out when I was 10 / “Gay” is a slur that none of us understand / It cuts anyway",
		},
	].reverse();
</script>

<CategoryIndexPage
	title="read"
	description="Sometimes I write. I’m particularly fond of poetry, but there are some other writing forms here. Some are experiments, others are reflections on emotions or events. Some are very old and probably not very good. Some are new and also not very good."
	{pages}
>
	<h1>read</h1>

	<p>
		Sometimes I write. I’m particularly fond of poetry, but there are some other
		writing forms here. Some are experiments, others are reflections on emotions
		or events. Some are very old and probably not very good. Some are new and
		also not very good.
	</p>
</CategoryIndexPage>
