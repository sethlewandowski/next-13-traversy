import * as React from "react";

async function fetchRepos() {
	const res = await fetch("https://api.github.com/users/sethlewandowski/repos");
	return await res.json();
}
export default async function ReposPage(props: IAppProps) {
	const repos = await fetchRepos();
	console.log(repos);

	return <div>{repos[0].name}</div>;
}
