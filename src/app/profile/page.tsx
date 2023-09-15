"use client";
import axios from "axios";
import { set } from "mongoose";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function ProfilePage() {
	const router = useRouter();
	const [user, setUser] = useState("nothing");
	const logOut = async () => {
		try {
			await axios.get("/api/users/logout");
			router.push("/login");
		} catch (error: any) {
			console.log(error);
		}
	};

	const getUserDetails = async () => {
		const res = await axios.get("/api/users/me");
		console.log(res.data);
		setUser(res.data.data._id);
	};

	useEffect(() => {
		getUserDetails();
	}, []);

	return (
		<div className='flex flex-col items-center justify-center py-2 '>
			<h1>Profile</h1>
			<p>Profile Page</p>
			<h2 className='p-1 rounded bg-green-500'>
				{user === "nothing" ? (
					"Nothing"
				) : (
					<Link href={`/profile/${user}`}>{user}</Link>
				)}
			</h2>
			<button
				className='bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded mt-2'
				onClick={logOut}
			>
				Log Out
			</button>
			{/* <button
				className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2'
				onClick={getUserDetails}
			>
				getUserDetails
			</button> */}
		</div>
	);
}
