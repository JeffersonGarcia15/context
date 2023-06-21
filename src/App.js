import { SearchForm } from "./components/SearchForm/SearchForm.jsx";
import { UserInfo } from "./components/UserInfo/UserInfo.jsx";

export function App() {
	return (
		<div className="App">
			<h1>GitHub User Search</h1>
			<SearchForm />
			<UserInfo />
		</div>
	);
}
