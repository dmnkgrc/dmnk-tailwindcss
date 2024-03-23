import { tv } from "tailwind-variants";

const baseStyles = tv({
	slots: {
		pageContainer: "w-full flex flex-row justify-center",
		pageContent:
			"w-full max-w-screen-lg py-10 bg-gray-100/75 h-screen overflow-y-auto px-6 flex flex-col space-y-6",
		title: "text-4xl text-center",
		avatarContainer: "flex flex-row justify-center",
		avatar: "w-24 h-24 rounded-full hover:scale-150 transition-all hover:my-4",
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
				<ul>
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
