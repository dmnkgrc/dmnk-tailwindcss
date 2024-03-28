import { tv } from "tailwind-variants";
import { GitHubIcon } from "./assets/GitHub";

const baseStyles = tv({
	slots: {
		pageContainer:
			"w-full flex flex-col h-screen overflow-y-hidden  bg-sumiInk-300 text-fujiWhite",
		header: "flex flex-row space-x-3 px-6 h-12 items-center text-crystalBlue",
		pageContent:
			"w-full relative h-[calc(100vh - 96px)] overflow-y-auto pr-6 pl-20 flex flex-col flex-1 space-y-6",
		sidebar: "absolute left-0 bg-sumiInk-400 w-16 h-full overflow-y-hidden",
		lineNumber: "text-right pr-2 text-sumiInk-700",
		title: "text-lg",
		avatarContainer: "flex flex-row justify-center",
		avatar: "w-8 h-8 rounded-full hover:scale-150 transition-all hover:my-4",
		list: "py-4 list-disc list-inside",
		footer: "flex flex-row space-x-3 h-8 items-center bg-sumiInk-500",
		githubLink:
			"bg-crystalBlue relative items-center text-md overflow-visible z-10 flex flex-row space-x-1 h-full text-sumiInk-400 before:absolute before:h-6 before:w-6 before:top-1 before:rotate-45 before:-right-2.5 before:bg-crystalBlue before:-z-10",
		githubIcon: "h-6 w-6",
	},
});

function App() {
	const styles = baseStyles();
	const numberOfLines = Array(100).fill(1);
	return (
		<div className={styles.pageContainer()}>
			<div className={styles.header()}>
				<img
					alt="GitHub Avatar"
					src="https://avatars.githubusercontent.com/u/4812676?v=4"
					className={styles.avatar()}
				/>
				<h1 className={styles.title()}>Dominik Garcia Bertapelle</h1>
			</div>
			<div className={styles.pageContent()}>
				<div className={styles.sidebar()}>
					{numberOfLines.map((_, index) => (
						<div className={styles.lineNumber()} key={index.toString()}>
							{index + 1}
						</div>
					))}
				</div>
				<p>
					I am a Staff Software Engineer focused mostly in the Frontend and the
					tooling around it. I have been coding since I am 12 years old, it
					started as a way to automate doing my homework 😅 and I have been
					loving it ever since. Currently, I am really passionate about making
					other engineers more productive while making it simpler for them to
					build amazing UX and UI. I love pairing with other engineers to find
					the best solutions together, helping the team achieve the highest
					standards possible.
				</p>
				<p>
					I felt that the "Who you are" section of the job description was
					describing me, which made me immediately want to apply. I am really
					passionate about going into unknown territory and solving problems in
					the unknown. Nevertheless, I don't just like to solve problems for the
					sake of solving them. I look at them from different angles so that we
					can:
					<ul className={styles.list()}>
						<li>Find the "why" we want to tackle the problem.</li>
						<li>
							What are the parts that we need to change to solve the problem and
							how they relate to each other.
						</li>
						<li>
							Think about different solutions; their benefits and their
							trade-offs.
						</li>
					</ul>
					Once we have a clear understanding of the problem and the different
					solutions, that is when I like to implement a solution. Even if I am
					not the one implementing it, I make sure that:
					<ul className={styles.list()}>
						<li>
							The implementation actually goes in the direction we want it to
							go.
						</li>
						<li>
							The design makes it easy to maintain in the future, but most
							importantly, it has the UX/UI that we strive for.
						</li>
						<li>
							We are writing great documentation so that the people involved in
							the problem do not become the only source of information.
						</li>
					</ul>
				</p>
				<p>
					Personally the projects that I would work on sound super exciting.
					From developing bundler plugins and IDE integrations to designing,
					building and documenting a Tooltip component. All of these things fall
					into the category that I love: "Making other developers life easier".
					What is even more interesting is the diversity of the problems and how
					different they are from each other. I have been learning Rust in my
					spear time and I love it, so that is definetely is a plus.
				</p>
				<p>
					Even writing this paragraphs about what is expected in the position
					and the type of work, gives me chills.
				</p>
				<p>
					There are a few projects that really standout to me right now:
					<ul className={styles.list()}>
						<li>
							Lead the migration of our frontend tooling from using Styled
							Components to Tailwind CSS and Nativewind for React Native:
						</li>
					</ul>
				</p>
				<ul className={styles.list()}>
					<li>
						What you’re excited about, and the work you’d be most looking
						forward to in this role.
					</li>
					<li>
						Interesting projects you’ve worked on, especially things that are
						relevant to the work we do here.
					</li>
					<li>
						Open-source contributions, whether it’s your own project, a pull
						request you’re proud of, or a well-written bug report you filed.
					</li>
					<li>
						Previous experience, especially any leadership responsibilities
						you’ve held in other roles.
					</li>
					<li>
						Technical writing, like blog posts you’ve published or documentation
						you’ve worked on.
					</li>
				</ul>
			</div>
			<div className={styles.footer()}>
				<a
					className={styles.githubLink()}
					href="https://github.com/dmnkgrc"
					target="_blank"
					rel="noopener noreferrer"
				>
					<GitHubIcon className={styles.githubIcon()} />
					<span>GitHub</span>
				</a>
			</div>
		</div>
	);
}

export default App;
