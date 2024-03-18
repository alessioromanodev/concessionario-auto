import { ModeToggle } from "@/components/Mode-toggle";

function Header() {
	return (
		<div className="py-3 px-5 sticky top-0 backdrop-blur-lg">
			<div className="w-2/3 m-auto flex justify-between items-center">
				<a href="/" className="flex gap-4 items-center">
					<h1 className="text-2xl font font-semibold">Romano Service</h1>
				</a>
				<ul className="flex text-muted-foreground gap-5 items-center">
					<li>
						<a
							className="font-semibold"
							href="https://github.com/Valeriopiccolo/tech-web-project"
						>
							Source
						</a>
					</li>
					<li>
						<a className="font-semibold" href="/">
							Home
						</a>
					</li>
					<li>
						<a className="font-semibold" href="/explore">
							Explore
						</a>
					</li>
				</ul>
				<ModeToggle />
			</div>
		</div>
	);
}

export default Header;
