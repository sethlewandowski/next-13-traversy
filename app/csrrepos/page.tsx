"use client";
import Link from "next/link";
import * as React from "react";

export default async function ReposPage() {
	// const repos: {}[] = await fetchRepos();
	async function fetchRepos() {
		const res = await fetch("https://api.github.com/users/sethlewandowski/repos");
		return await res.json();
	}

	const [repos, setRepos] = React.useState([]);

	React.useEffect(() => {
		async function getRepos() {
			const repos = await fetchRepos();
			console.log("repos=", repos);
			setRepos(repos);
		}
		getRepos();
	}, []);

	return (
		<>
			<h1>Repositories</h1>
			<section>
				{repos.length &&
					repos?.map((repo: any) => (
						<div key={repo.id}>
							<Link href={`code/repos/${repo.name}`}>
								<h2 key={repo.name}>{repo.name}</h2>
								<p>Link: {repo.html_url}</p>
							</Link>
						</div>
					))}
			</section>
		</>
	);
}
