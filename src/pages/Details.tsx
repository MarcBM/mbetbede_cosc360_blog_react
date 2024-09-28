import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import detailsStyles from '../styles/Details.module.css';
import { useEffect, useState } from 'react';

const api_url = 'http://34.87.237.39/api/posts/';
const api_key =
	'66f6d81658ca611b5a056f03|LcLb9dPeRmkbnG1jnFWCJpomKAd9n3LXZD49fNCv3f19da7f';

export default function Details() {
	const { id } = useParams<{ id: string }>();
	const [post, setPost] = useState<{ title: string; content: string } | null>(
		null
	);

	useEffect(() => {
		fetch(api_url + id, {
			method: 'GET',
			headers: {
				Authorization: 'Bearer ' + api_key,
				'Content-Type': 'application/json'
			}
		})
			.then(response => response.json())
			.then(data => {
				setPost(data.data);
			})
			.catch(error => {
				console.error('Error:', error);
			});
	}, [id, setPost]);

	if (!post) {
		return (
			<>
				<Header />
				<main className={detailsStyles.main}>
					<div className={detailsStyles.container}>
						<div className={detailsStyles.title}>
							<h1>Loading Post...</h1>
						</div>
					</div>
				</main>
			</>
		);
	}

	return (
		<>
			<Header />
			<div className={detailsStyles.main}>
				<div className={detailsStyles.container}>
					<div>
						<div className={detailsStyles.title}>
							<h2>{post.title}</h2>
						</div>
						<div className={detailsStyles.contents}>
							<p>{post.content}</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
