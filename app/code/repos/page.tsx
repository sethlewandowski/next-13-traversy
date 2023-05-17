import Link from "next/link";
import { resolve } from "path";
import * as React from "react";

async function fetchRepos() {
	const res = await fetch("https://api.github.com/users/sethlewandowski/repos");
	await new Promise((resolve) => setTimeout(resolve, 1000));
	return await res.json();
}
export default async function ReposPage() {
	const repos = await fetchRepos();

	return (
		<>
			<h1>Repositories</h1>
			{repos.map((repo: any) => (
				<li key={repo.id}>
					<Link href={`code/repos/${repo.name}`}>
						<h2 key={repo.name}>{repo.name}</h2>
						<p></p>
					</Link>
				</li>
			))}
		</>
	);
}
