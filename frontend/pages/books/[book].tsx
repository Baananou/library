import { NextPage, GetServerSideProps, GetStaticProps, GetStaticPaths } from "next";
import Image from "next/image";
import Layout from "../../components/layout";
import Link from "next/link";
import { useContext, useState } from "react";
import { useRouter } from "next/router";
  

const BookDetails: NextPage<{ book: any}> = ({
	book,
}) => {
	const router = useRouter();

	if (!book) {
		router.push("/books");
	}

	return (
		<>
			<Layout>
				<div className="bg-secondary-tint lg:pt-16">
					<section className="relative pt-16 lg:pt-0">
						{book.title }
					</section>
				</div>
			</Layout>
		</>
	);
};
  
export const getServerSideProps = async () => {
	const res = await fetch(`http://localhost:5000/book/${router.query.id}`);
	const data = await res.json();
	return {
		props: {
			book: data,
		},
	};
};

export default BookDetails;
