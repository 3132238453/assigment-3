import Image from "next/image";
import Hero from "./components/hero";
import Extension from "./components/extension";
import Customize from "./components/customize";
import Management from "./components/management";
import Work  from "./components/work";
import Sponsers from "./components/spounsers";
export default function Home() {
	return (
		<div>
			<Hero />
			<Management/>
			<Extension />
			<Customize />
			<Work/>
			<Sponsers/>
		</div>
	);
}