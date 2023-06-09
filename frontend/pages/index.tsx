import { Key } from "react";
import Layout from "../components/layout";
import Link from "next/link";
import { Router } from "next/router";

const Home = () => {
	return (
		<Layout>
			<h1 className="text-2xl font-bold mx-12 pt-6">Home Page </h1>
			<div className="flex flex-col gap-2 ">
				<Link href={"/books"}>Check available Books</Link>
				<Link href={"/customers"}>Check all Customers</Link>
				<Link href={"/orders"}>Check all orders</Link>
			</div>
		</Layout>
	);
};
export default Home;
