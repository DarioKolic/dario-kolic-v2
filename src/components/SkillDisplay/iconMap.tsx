import { ETechStack } from '@/lib/constants';
import {
    SiNextdotjs,
    SiReact,
    SiAuth0,
    SiStripe,
    SiVercel,
    SiGithub,
    SiSass,
    SiAntdesign,
    SiShopify,
    SiChartdotjs,
    SiJirasoftware,
    SiRemix,
    SiTailwindcss,
} from 'react-icons/si';
import { FaServer } from 'react-icons/fa';
import { DiMongodb } from 'react-icons/di';
import { VscAzure } from "react-icons/vsc";

export const skillIconMap: { [key in ETechStack]: React.ElementType } = {
    [ETechStack.NEXT_JS]: SiNextdotjs,
    [ETechStack.REACT]: SiReact,
    [ETechStack.AUTH0]: SiAuth0,
    [ETechStack.STRIPE]: SiStripe,
    [ETechStack.AZURE]: VscAzure,
    [ETechStack.VERCEL]: SiVercel,
    [ETechStack.GITHUB]: SiGithub,
    [ETechStack.SCSS]: SiSass,
    [ETechStack.ANT_DESIGN]: SiAntdesign,
    [ETechStack.VIRTUALIZATION]: FaServer,
    [ETechStack.COSMOSDB]: DiMongodb,
    [ETechStack.SHOPIFY]: SiShopify,
    [ETechStack.CHART_JS_RECHARTS]: SiChartdotjs,
    [ETechStack.AGILE_SCRUM]: SiJirasoftware,
    [ETechStack.REMIX]: SiRemix,
    [ETechStack.TAILWIND]: SiTailwindcss,
};