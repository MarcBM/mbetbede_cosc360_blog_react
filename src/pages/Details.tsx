import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import detailsStyles from '../styles/Details.module.css';
import { useEffect, useState } from 'react';
import posts from '../data/posts.json';

export default function Details() {
	const { id } = useParams<{ id: string }>();
	const [post, setPost] = useState<
		{ title: string; content: string } | undefined
	>(undefined);

	useEffect(() => {
		const fetchRecord = () => {
			const fetchedPost = posts.data.find(post => post._id === id);
			setPost(fetchedPost);
		};

		fetchRecord();
	}, [id]);

	if (!post) {
		return <div>Post not found!</div>;
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
