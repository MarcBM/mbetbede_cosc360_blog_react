import appStyles from '../styles/App.module.css';
import Header from '../components/Header';
import PostCard from '../components/PostCard';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const api_url = 'http://mbetbede_cosc360_blog.test/api/posts';
const api_key =
	'66f6d81658ca611b5a056f03|LcLb9dPeRmkbnG1jnFWCJpomKAd9n3LXZD49fNCv3f19da7f';

function App() {
	const [posts, setPosts] = useState<
		| [
				{
					_id: string;
					title: string;
				}
		  ]
		| null
	>(null);

	useEffect(() => {
		fetch(api_url, {
			method: 'GET',
			headers: {
				Authorization: 'Bearer ' + api_key,
				'Content-Type': 'application/json'
			}
		})
			.then(response => response.json())
			.then(data => {
				setPosts(data.data);
			})
			.catch(error => {
				console.error('Error:', error);
			});
	}, [setPosts]);

	if (!posts) {
		return (
			<>
				<Header />
				<main className={appStyles.main}>
					<div className={appStyles.container}>
						<div className={appStyles.title}>
							<h1>Loading Posts...</h1>
						</div>
					</div>
				</main>
			</>
		);
	}

	return (
		<>
			<Header />
			<main className={appStyles.main}>
				<div className={appStyles.container}>
					{posts.map(post => (
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
