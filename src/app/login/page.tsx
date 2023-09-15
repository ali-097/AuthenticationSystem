"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import axios from "axios";

const LoginPage = () => {
	const router = useRouter();
	const [user, setUser] = useState({
		email: "",
		password: "",
	});

	const onLogin = async () => {
		try {
			const response = await axios.post("/api/users/login", user);
			console.log(response);
			router.push("/profile");
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className='flex flex-col items-center justify-center py-2 gap-2'>
			<h1>Log in</h1>
			<label htmlFor='email'>Email</label>
			<input
				id='email'
				type='email'
				value={user.email}
				onChange={(e) => setUser({ ...user, email: e.target.value })}
				className='px-2 py-2 border border-gray-300 rounded-md text-slate-950'
			/>
			<label htmlFor='password'>Password</label>
			<input
				id='password'
				type='password'
				value={user.password}
				onChange={(e) => setUser({ ...user, password: e.target.value })}
				className='px-2 py-2 border border-gray-300 rounded-md text-slate-950'
			/>
			<button
				onClick={onLogin}
				className='px-2 py-2 mt-2 border border-gray-300 rounded-md disabled:opacity-50 disabled:cursor-not-allowed'
				disabled={!user.email || !user.password}
			>
				Log in
			</button>
			<Link
				href='/signup'
				className='text-white underline hover:text-gray-400 mt-2 '
			>
				Sign Up
			</Link>
		</div>
	);
};

export default LoginPage;
