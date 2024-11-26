import { PlagiarismBenefit } from "../components"

import { originality, credibility, safeguard } from "../assets/icons"

const BenefitsOFPlagiarism = () => {
  return (
    <div className="lg:padding-x pt-24 max-md:px-5">
      <h1 className="text-center mt-5 text-5xl font-bold max-md:text-3xl  text-gray-700">Plagiarism Checker Benefits</h1>

      <div className="flex gap-10 mt-24 max-md:flex-col">
        <PlagiarismBenefit
          icon={originality}
          iconName="Originality icon"
          title="Originality"
          context="Guarantees that your content is unique, preserving the integrity of your academic, professional, or creative work."
        />

        <PlagiarismBenefit
          icon={credibility}
          iconName="Credibility icon"
          title="Credibility"
          context="Verifying your work is plagiarism-free, you earn the trust of your audience, showcasing professionalism and ethical responsibility."
        />

        <PlagiarismBenefit
          icon={safeguard}
          iconName="Safeguard icon"
          title="Safeguard"
          context="Helps you avoid copyright issues and legal trouble by ensuring compliance with intellectual property laws."
        />
      </div>
    </div>
  )
}

export default BenefitsOFPlagiarism