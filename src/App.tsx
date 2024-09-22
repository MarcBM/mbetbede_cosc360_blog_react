import './App.css';
import posts from './data/posts.json';

function App() {
	const postsData = posts.data;
	return (
		<>
			<header className="header">My Blog Posts!</header>
			<main className="main">
				<div className="container">
					{postsData.map(post => (
						<div className="post">
							<h2 className="title">{post.title}</h2>
						</div>
					))}
				</div>
			</main>
		</>
	);
}

export default App;
