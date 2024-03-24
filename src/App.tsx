import { tv } from "tailwind-variants";

const baseStyles = tv({
	slots: {
		pageContainer: "w-full flex flex-row justify-center",
		pageContent:
			"w-full max-w-screen-lg py-10 bg-gray-100/75 h-screen overflow-y-auto px-6 flex flex-col space-y-6",
		title: "text-4xl text-center",
		avatarContainer: "flex flex-row justify-center",
		avatar: "w-24 h-24 rounded-full hover:scale-150 transition-all hover:my-4",
		list: "py-4 list-disc list-inside",
	},
});

function App() {
	const styles = baseStyles();
	return (
		<div className={styles.pageContainer()}>
			<div className={styles.pageContent()}>
				<h1 className={styles.title()}>Dominik Garcia Bertapelle</h1>
				<a
					className={styles.avatarContainer()}
					href="https://github.com/dmnkgrc"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						alt="GitHub Avatar"
						src="https://avatars.githubusercontent.com/u/4812676?v=4"
						className={styles.avatar()}
					/>
				</a>
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
		</div>
	);
}

export default App;
