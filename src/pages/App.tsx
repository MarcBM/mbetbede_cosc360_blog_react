import appStyles from '../styles/App.module.css';
import posts from '../data/posts.json';
import Header from '../components/Header';

function App() {
	const postsData = posts.data;
	return (
		<>
			<Header />
			<main className={appStyles.main}>
				<div className={appStyles.container}>
					{postsData.map(post => (
						<div className={appStyles.post} key={post._id}>
							<h2 className={appStyles.title}>{post.title}</h2>
						</div>
					))}
				</div>
			</main>
		</>
	);
}

export default App;
