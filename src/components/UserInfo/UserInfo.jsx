import { useGitHubContext } from "../../context/GitHubUserContext.jsx";

export function UserInfo() {
	const { user, loading } = useGitHubContext();

	if (loading) {
		return <h1>Loading...</h1>;
	}

	if (!user) {
		return <h1>No user found</h1>;
	}

	return (
		<>
			<h1>{user.login}</h1>
			<img src={user.avatar_url} alt={user.login} />
		</>
	);
}
