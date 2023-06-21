import { createContext, useContext, useState } from "react";

const GitHubUserContext = createContext();

export function useGitHubContext() {
	return useContext(GitHubUserContext);
}

export function GitHubUserProvider({ children }) {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(false);

	async function fetchUser(e, username) {
		e.preventDefault();
		setLoading(true);

		try {
			const response = await fetch(`https://api.github.com/users/${username}`);
			if (response.ok) {
				const data = await response.json();
				setUser(data);
			}
		} catch (error) {
			console.error(error);
		} finally {
			setLoading(false);
		}
	}

	return (
		<GitHubUserContext.Provider value={{ user, loading, fetchUser }}>
			{children}
		</GitHubUserContext.Provider>
	);
}
