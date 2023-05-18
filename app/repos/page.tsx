import Link from "next/link";
import * as React from "react";

async function fetchRepos() {
	const res = await fetch("https://api.github.com/users/sethlewandowski/repos");
	return await res.json();
}
export default async function ReposPage() {
	const repos: {}[] = await fetchRepos();
	console.log("repos=", repos);

	return (
		<>
			<h1>Repositories</h1>
			{repos.length > 0 &&
				repos?.map((repo: any) => (
					<div key={repo.id}>
						<Link href={`code/repos/${repo.name}`}>
							<h2 key={repo.name}>{repo.name}</h2>
							<p>Link: {repo.html_url}</p>
						</Link>
					</div>
				))}
		</>
	);
}
