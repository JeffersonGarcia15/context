import { useEffect, useState } from "react";

import { useGitHubContext } from "../../context/GitHubUserContext.jsx";

export function SearchForm() {
	const { fetchUser } = useGitHubContext();
	const [username, setUsername] = useState("");
	const [validations, setValidations] = useState({});

	useEffect(() => {
		const errors = {};
		if (username.length < 3) {
			errors.username = "Username must be at least 3 characters long";
		}
		setValidations(errors);
	}, [username]);

	return (
		<>
			{validations.username && <p>{validations.username}</p>}
			<form onSubmit={(e) => fetchUser(e, username)}>
				<input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
				<button disabled={Object.values(validations).length}>Search</button>
			</form>
		</>
	);
}
