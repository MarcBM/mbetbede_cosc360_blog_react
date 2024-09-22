import appStyles from '../styles/App.module.css';
import posts from '../data/posts.json';
import Header from '../components/Header';
import PostCard from '../components/PostCard';
import { Link } from 'react-router-dom';

function App() {
	const postsData = posts.data;
	return (
		<>
			<Header />
			<main className={appStyles.main}>
				<div className={appStyles.container}>
					{postsData.map(post => (
						<Link to={'/post/' + post._id} key={post._id}>
							<PostCard key={post._id} _id={post._id} title={post.title} />
						</Link>
					))}
				</div>
			</main>
		</>
	);
}

export default App;
