import { CaseStudy } from "@/components/pages/CaseStudy/CaseStudy"
import { projects } from "@/lib/constants"
import { Metadata } from "next"
import { notFound } from "next/navigation"

interface Props {
  params: Promise<{ id: string }>
}

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const { id } = await params
 
  const project = projects.find(p => p.company.toLowerCase() === id)

  if(!project) {
    return notFound()
  }
 
  return {
    title: `"${project?.company}" Case Study`,
    description: project?.caseStudy.description,
    keywords: [
      "Case study",
      project.company,
      ...project.skills,
    ]
  }
}

const APage = async ({
    params,
  }: Props) => {
    const { id } = await params
    const project = projects.find(p => p.company.toLowerCase() === id)

    if(!project) {
        return notFound()
    }

    return <CaseStudy project={project} />
}

export default APage

// https://docs.google.com/spreadsheets/d/1gHnt7iLJuxhM77Vv0ez_psWkANjtFwbA5AneFfMZGD4/edit?usp=sharing