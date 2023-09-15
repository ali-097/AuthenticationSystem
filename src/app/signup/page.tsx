"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import axios from "axios";

const SignupPage = () => {
	const router = useRouter();

	const [user, setUser] = useState({
		email: "",
		username: "",
		password: "",
	});

	const onSignup = async () => {
		try {
			const res = await axios.post("/api/users/signup", user);
			console.log(res);
			if (res.status === 201) {
				router.push("/login");
			}
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div className='flex flex-col items-center justify-center py-2 gap-2'>
			<h1>Sign Up</h1>
			<label htmlFor='email'>Email</label>
			<input
				id='email'
				type='email'
				value={user.email}
				onChange={(e) => setUser({ ...user, email: e.target.value })}
				className='px-2 py-2 border border-gray-300 rounded-md text-gray-950'
			/>
			<label htmlFor='username'>Username</label>
			<input
				id='username'
				type='text'
				value={user.username}
				onChange={(e) => setUser({ ...user, username: e.target.value })}
				className='px-2 py-2 border border-gray-300 rounded-md text-gray-950'
			/>
			<label htmlFor='password'>Password</label>
			<input
				id='password'
				type='password'
				value={user.password}
				onChange={(e) => setUser({ ...user, password: e.target.value })}
				className='px-2 py-2 border border-gray-300 rounded-md  text-gray-950'
			/>
			<button
				onClick={onSignup}
				className='px-2 py-2 mt-2 border border-gray-300 rounded-md disabled:opacity-50 disabled:cursor-not-allowed'
				disabled={!user.email || !user.username || !user.password}
			>
				Sign Up
			</button>
			<Link
				href='/login'
				className='text-white underline hover:text-gray-400 mt-2 '
			>
				Login
			</Link>
		</div>
	);
};

export default SignupPage;
