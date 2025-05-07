import { CaseStudy } from "@/components/pages/CaseStudy/CaseStudy"
import { projects } from "@/lib/constants"
import { notFound } from "next/navigation"



const APage = async ({
    params,
  }: {
    params: Promise<{ id: string }>
  }) => {
    const { id } = await params
    const project = projects.find(p => p.company.toLowerCase() === id)

    if(!project) {
        return notFound()
    }

    return <CaseStudy project={project} />
}

export default APage