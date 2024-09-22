import appStyles from '../styles/App.module.css';
import Header from '../components/Header';
import PostCard from '../components/PostCard';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const api_url = 'http://mbetbede_cosc360_blog.test/api/posts';
const api_key =
	'66cd7ad8428e5d5c5c0fd2e0|JpiLfSjt1uE2cIsCv027FZnLDtxwHkFOlRIl4SQ0c0170d01';

function App() {
	const [posts, setPosts] = useState<
		[
			{
				_id: string;
				title: string;
				content: string;
			}
		]
	>([{ _id: '', title: '', content: '' }]);

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
		return <div>No posts found!</div>;
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
