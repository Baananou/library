import { Key } from "react";
import Layout from "../../components/layout";
import Link from "next/link";
import { Router } from "next/router";

const Orders = () => {
	return (
		<Layout>
			<h1 className="text-2xl font-bold mx-12 pt-6">Orders Page </h1>
			<div className="flex flex-col gap-2 ">
				<Link href={"/"}>Go To Home Page</Link>
				<Link href={"/customers"}>Check all Customers</Link>
				<Link href={"/books"}>Check all books</Link>
			</div>
		</Layout>
	);
};
export default Orders;