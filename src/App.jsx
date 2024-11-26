import { BenefitsOFPlagiarism, Nav, Plagiarism, Titlepage } from "./sections"

const App = () => {
  return (
    <main className="pb-24">
			<Nav />

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

export default App