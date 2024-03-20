import React from "react";
import { FaSearch } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";

export default function Explore() {
	return (
		<>
			<div className="w-full py-10">
				<div className="lg:container px-4">
					<h2 className="font-playfair text-5xl text-primary-dark font-bold mb-6 text-center">
						Explore By Category
					</h2>
					<div className="flex flex-col lg:flex-row justify-center items-center gap-4 lg:gap-10">
						{/* top menu */}
						<div className="w-full visible lg:hidden">
							<ul className="menu menu-horizontal bg-base-200 rounded-box mt-6">
								<label className="input input-bordered flex items-center justify-center w-full">
									<input type="text" className="bg-base-100" placeholder="Search" />
									<FaSearch size={20} className="cursor-pointer" />
								</label>
								<li>
									<a>Living Room</a>
								</li>
								<li>
									<a>Dining Room</a>
								</li>
								<li>
									<a>Meeting Room</a>
								</li>
								<li>
									<a>Living Space</a>
								</li>
								<li>
									<a>Workspace</a>
								</li>
								<li>
									<a>Bedroom</a>
								</li>
								<li>
									<a>Kitchen</a>
								</li>
								<button className="btn px-8 btn-primary-light shadow-lg border-none">
									All Categories <FaArrowRight size={25} />
								</button>
							</ul>
						</div>

						{/* side menu */}
						<div className="hidden lg:w-1/4 lg:block">
							<ul className="menu menu-lg bg-base-200 space-y-4 text-primary-dark text-lg rounded-lg">
								<label className="input input-bordered input-lg flex items-center justify-center w-full">
									<input type="text" className="bg-base-100" placeholder="Search" />
									<FaSearch size={20} className="cursor-pointer" />
								</label>
								<li>
									<a>Living Room</a>
								</li>
								<li>
									<a>Dining Room</a>
								</li>
								<li>
									<a>Meeting Room</a>
								</li>
								<li>
									<a>Living Space</a>
								</li>
								<li>
									<a>Workspace</a>
								</li>
								<li>
									<a>Bedroom</a>
								</li>
								<li>
									<a>Kitchen</a>
								</li>
								<button className="btn px-8 btn-primary-light shadow-lg border-none">
									All Categories <FaArrowRight size={25} />
								</button>
							</ul>
						</div>
						<div className="w-full ld:w-3/4">
							<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-8">
								<div className="group bg-base-200 rounded-3xl w-full aspect-video hover:bg-base-300 flex flex-col items-center justify-center gap-4">
									<p className="hidden group-hover:block text-5xl font-playfair font-bold text-primary-dark">Couch</p>
									<button className="hidden group-hover:block btn px-8 btn-primary-light shadow-lg border-none">
										EXPLORE
									</button>
								</div>
								<div className="group bg-base-200 rounded-3xl w-full aspect-video hover:bg-base-300 flex flex-col items-center justify-center gap-4">
									<p className="hidden group-hover:block text-5xl font-playfair font-bold text-primary-dark">Couch</p>
									<button className="hidden group-hover:block btn px-8 btn-primary-light shadow-lg border-none">
										EXPLORE
									</button>
								</div>
								<div className="group bg-base-200 rounded-3xl w-full aspect-video hover:bg-base-300 flex flex-col items-center justify-center gap-4">
									<p className="hidden group-hover:block text-5xl font-playfair font-bold text-primary-dark">Couch</p>
									<button className="hidden group-hover:block btn px-8 btn-primary-light shadow-lg border-none">
										EXPLORE
									</button>
								</div>
								<div className="group bg-base-200 rounded-3xl w-full aspect-video hover:bg-base-300 flex flex-col items-center justify-center gap-4">
									<p className="hidden group-hover:block text-5xl font-playfair font-bold text-primary-dark">Couch</p>
									<button className="hidden group-hover:block btn px-8 btn-primary-light shadow-lg border-none">
										EXPLORE
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
