import appStyles from '../styles/App.module.css';
import posts from '../data/posts.json';
import Header from '../components/Header';
import PostCard from '../components/PostCard';

function App() {
	const postsData = posts.data;
	return (
		<>
			<Header />
			<main className={appStyles.main}>
				<div className={appStyles.container}>
					{postsData.map(post => (
						<PostCard key={post._id} _id={post._id} title={post.title} />
					))}
				</div>
			</main>
		</>
	);
}

export default App;
