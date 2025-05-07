import { ETechStack } from "./constants";

export interface IMessage {
    id: string
    message: string
    persona: "system" | "user"
    createdAt: Date
}

export type TSkill =
    | ETechStack.NEXT_JS
    | ETechStack.REACT
    | ETechStack.AUTH0
    | ETechStack.STRIPE
    | ETechStack.AZURE
    | ETechStack.VERCEL
    | ETechStack.GITHUB
    | ETechStack.SCSS
    | ETechStack.ANT_DESIGN
    | ETechStack.VIRTUALIZATION
    | ETechStack.COSMOSDB
    | ETechStack.SHOPIFY
    | ETechStack.CHART_JS_RECHARTS
    | ETechStack.AGILE_SCRUM
    | ETechStack.REMIX
    | ETechStack.TAILWIND;

export interface IProject {
    id: string
    company: string
    location: string
    role: string
    startDate: string
    endDate?: string
    achievements: string[]
    skills: TSkill[]
    website: string
    caseStudy: {
        description: string
        outline: string
        clientFeedback?: string
    }
    imageUrl: string
}