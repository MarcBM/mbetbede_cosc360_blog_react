import appStyles from '../styles/App.module.css';
import { PostCardProps } from '../types/PostCardProps';

export default function PostCard(props: PostCardProps) {
	return (
		<div className={appStyles.post} key={props._id}>
			<h2 className={appStyles.title}>{props.title}</h2>
		</div>
	);
}
