import { BenefitsOFPlagiarism, Nav, Plagiarism, Titlepage } from "./sections"

const LandingPage = () => {
	return (
		<main className="pb-24">
			<section>
				<Titlepage />
			</section>

			<section>
				<Plagiarism />
			</section>

			<section>
				<BenefitsOFPlagiarism />
			</section>
		</main>
	)
}

export default LandingPage