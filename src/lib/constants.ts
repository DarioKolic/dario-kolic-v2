import { v4 } from "uuid";
import { IProject } from "./interfaces";

export enum ETechStack {
    NEXT_JS = "next.js",
    REACT = "react",
    AUTH0 = "auth0",
    STRIPE = "stripe",
    AZURE = "azure",
    VERCEL = "vercel",
    GITHUB = "github",
    SCSS = "scss",
    ANT_DESIGN = "ant design",
    VIRTUALIZATION = "virtualization",
    COSMOSDB = "cosmosdb",
    SHOPIFY = "shopify",
    CHART_JS_RECHARTS = "chart.js/recharts",
    AGILE_SCRUM = "agile/scrum",
    REMIX = "remix",
    TAILWIND = "tailwind"
}

export const projects: IProject[] = [
    {
        id: v4(),
        company: "Humy.ai",
        location: "Stockholm",
        role: "Front-end Developer",
        startDate: "July 2023",
        achievements: [
            "Facilitated the transition from mobile apps to web applications, resulting in a 300% increase in annual revenue",
            "Helped secure a pre-seed funding round by leading development in Next.js",
            "Built compliant authentication that led to contact with enterprise clients such as Nyack Public Schools",
            "Built major business features on the front-end and internationalization to 44 languages",
            "Increased quality of AI responses by utilizing prompt engineering",
        ],
        skills: [
            ETechStack.NEXT_JS,
            ETechStack.REACT,
            ETechStack.AUTH0,
            ETechStack.STRIPE,
            ETechStack.AZURE,
            ETechStack.VERCEL,
            ETechStack.GITHUB,
            ETechStack.SCSS,
            ETechStack.ANT_DESIGN,
            ETechStack.VIRTUALIZATION,
            ETechStack.COSMOSDB,
        ],
        website: "https://www.humy.ai/",
        caseStudy: {
            description: "Humy.ai is an innovative LMS that lets schools engage with AI-powered assistants as historical figures, providing teachers with dynamic tools, assignments, and access to over 2,000 iconic figures from the past.",
            outline: `
                <p>I was responsible for leading development of Next.js applications, from task management to code reviews, I've built all of their major features on the frontend.</p>
                <p>The most interesting aspect for me is building the chatbot itself. Incorporated advanced chat animations that make the AI feel like it's actually typing, it increases
                student engagement and teachers love the product.</p>
                <p>Apart from that, after the first year of my engagement in Humy I was promoted to a full-stack developer, started building and maintainging back-end features too, utilized prompt
                engineering, built new routes and requests, translated application to over 40+ languages.</p>
            `,
            clientFeedback: "I want to thank you for this year and It has been a pleasure working with you. You have been surpassing my expectations by not only owning the frontend and but also... tech and product metrics too."
        },
        imageUrl: "https://i.imgur.com/XG5QkxS.png&w=3840&q=100"
    },
    
    {
        id: v4(),
        company: "Yayloh",
        location: "Stockholm",
        role: "Front-end Developer",
        startDate: "June 2021",
        endDate: "February 2024",
        achievements: [
            "Applied Shopify App Design Guidelines, leading to greater adoption by global brands",
            "Optimized the front-end for improved UX/UI, resulting in increased user engagement",
            "Collaborated with back-end engineers, resulting in smoother workflows and faster feature releases",
        ],
        skills: [
            ETechStack.REACT,
            ETechStack.SHOPIFY,
            ETechStack.GITHUB,
            ETechStack.SCSS,
            ETechStack.ANT_DESIGN,
            ETechStack.CHART_JS_RECHARTS,
            ETechStack.AGILE_SCRUM,
        ],
        website: "https://www.yayloh.com/",
        caseStudy: {
            description: "Yayloh is the returns management platform designed to improve your customer experience, save hours of manual work and reduce customer returns.",
            outline: `
                <p>Helped maintain a complex front-end, joined the team once I had only about 2 years of experience.</p>
                <p>Built numerous features and helped them prepare the application for Shopify App Store, followed guidelines of adding Loaders to appropirate places,
                helpful messages to improve UX (e.g. "Logging in...") and fixed critial UX components that were rejected by Shopify.</p>
                <p>Later, redesigned the application and helped them incorporate branding through advanced CSS help.</p>
            `,
            clientFeedback: "Dario is a detail-oriented and efficient frontend developer who writes clean, high-quality code. Working in a team of six, he collaborated seamlessly with backend engineers to deliver smooth integrations. Highly self-driven, he tackled challenges proactively and consistently met deadlines. His speed and precision make him a valuable asset to any team."
        },
        imageUrl: "https://i.ibb.co/RghnpCK/Screenshot-2023-06-22-at-16-10-54-yayloh-The-Returns-Management-Platform-for-Fashion-Brands.png&w=3840&q=100"
    },
    {
        id: v4(),
        company: "Amy/Voxia",
        location: "Israel",
        role: "Front-end Developer",
        startDate: "November 2022",
        endDate: "July 2023",
        achievements: [
            "Successfully secured key customers by implementing an analytics page with real-time data visualization",
            "Given suggestions and feedback to increase the overall value of the application",
            "Utilized React to develop reusable components and optimize performance",
        ],
        skills: [
            ETechStack.REMIX,
            ETechStack.REACT,
            ETechStack.TAILWIND,
            ETechStack.CHART_JS_RECHARTS,
            ETechStack.SCSS,
        ],
        website: "https://www.voxia.ai/",
        caseStudy: {
            description: "Amy simplifies sales performance tracking, guides reps in prioritizing tasks, and boosts team engagement, all through your familiar Slack interface.",
            outline: "",
        },
        imageUrl: "https://i.ibb.co/YtBQ0Ry/Screenshot-2023-06-22-at-16-25-44-Performance-Management-Straight-to-Slack.png&w=3840&q=100"
    },
    // {
    //     id: v4(),
    //     company: "WINR.se",
    //     location: "Stockholm",
    //     role: "Full-stack Developer",
    //     startDate: "November 2022",
    //     endDate: "July 2023",
    //     achievements: [
    //         "Successfully secured key customers by implementing an analytics page with real-time data visualization",
    //         "Given suggestions and feedback to increase the overall value of the application",
    //         "Utilized React to develop reusable components and optimize performance",
    //     ],
    //     skills: [
    //         ETechStack.REMIX,
    //         ETechStack.REACT,
    //         ETechStack.TAILWIND,
    //         ETechStack.CHART_JS_RECHARTS,
    //         ETechStack.SCSS,
    //     ],
    //     website: "https://www.voxia.ai/",
    //     caseStudy: {
    //         description: ""
    //     },
    //     imageUrl: "https://i.ibb.co/QDQCx8W/Screenshot-2023-06-22-at-16-22-53-WINR-Medborgarengagemang.png&w=3840&q=100"
    // },
  ];