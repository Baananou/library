import Link from "next/link";
import React from "react";

export default function Footer() {
	return (
		<footer className="relative bg-blueGray-200 pt-8 pb-6 bg-secondary">
			<div className="container mx-auto px-4">
				<div className="flex flex-wrap text-left lg:text-left">
					<div className="w-full lg:w-6/12 px-4">
						<h4 className="text-3xl fonat-semibold text-blueGray-700">
							Let's keep in touch!
						</h4>
						<h5 className="text-lg mt-0 mb-2 text-blueGray-600">
							Find us on any of these platforms, we respond 1-2 business days.
						</h5>
					</div>
					<div className="w-full lg:w-6/12 px-4">
						<div className="flex flex-wrap items-top mb-6">
							<div className="w-full lg:w-4/12 px-4 ml-auto mb-4">
								<span className="block uppercase text-blueGray-500 text-xl font-semibold mb-2">
									Useful Links
								</span>
								<ul className="list-unstyled">
									<li>
										<a
											className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
											href="https://github.com/Baananou/library"
										>
											<i className="fab fa-github-square text-lg leading-lg text-primary opacity-75"></i>
											<span className="ml-2">Github Repo</span>
										</a>
									</li>
									<li>
										<a
											className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
											href="https://www.linkedin.com/in/mohamed-yessine-baananou"
										>
											<i className="fab fa-linkedin text-lg leading-lg text-primary opacity-75"></i>
											<span className="ml-2">My LinkedIn</span>
										</a>
									</li>
									<li>
										<a
											className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
											href="https://gitlab.com/Baananou"
										>
											<i className="fab fa-gitlab text-lg leading-lg text-primary opacity-75"></i>
											<span className="ml-2">My Gitlab</span>
										</a>
									</li>
									<li>
										<a
											className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
											href="https://github.com/Baananou"
										>
											<i className="fab fa-github text-lg leading-lg text-primary opacity-75"></i>
											<span className="ml-2">My Github</span>
										</a>
									</li>
								</ul>
							</div>
							<div className="w-full lg:w-4/12 px-4">
								<span className="block uppercase text-blueGray-500 text-xl font-semibold mb-2">
									Other Links
								</span>
								<ul className="list-unstyled">
									<li>
										<Link href="/contact" passHref>
											<div className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">
												Contact Me
											</div>
										</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div className="flex flex-wrap items-center md:justify-between justify-center">
					<div className="w-full md:w-4/12 px-4 mx-auto text-center">
						<div className="text-sm text-blueGray-500 font-semibold py-1">
							Copyright ©
							<span id="get-current-year">{new Date().getFullYear()}</span>
							<a
								href="https://www.linkedin.com/in/mohamed-yessine-baananou"
								className="text-blueGray-500 hover:text-gray-800"
								target="_blank"
							>
								{" "}
								Mohamed Yessine Baananou
							</a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
