async function fetchRepo(name: string) {
	const repo = await fetch(`https://api.github.com/repos/sethlewandowski/${name}`).then((res) => res.json());
	return repo;
}

export default async function Repo({ name }: any): Promise<any> {
	const repo = await fetchRepo(name);
	console.log(repo);
	return (
		<div>
			<h1>{repo.name}</h1>
		</div>
	);
}
