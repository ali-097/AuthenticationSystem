export default function UserProfile({ params }: any) {
	return (
		<div className='flex flex-col items-center justify-center py-2 '>
			<h1>Profile</h1>
			<p className='text-4xl'>{params.id}</p>
		</div>
	);
}
