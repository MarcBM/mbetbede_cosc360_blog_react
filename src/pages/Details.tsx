import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import detailsStyles from '../styles/Details.module.css';
import { useEffect, useState } from 'react';

const api_url = 'http://mbetbede_cosc360_blog.test/api/posts/';
const api_key =
	'66cd7ad8428e5d5c5c0fd2e0|JpiLfSjt1uE2cIsCv027FZnLDtxwHkFOlRIl4SQ0c0170d01';

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
