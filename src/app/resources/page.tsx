import { Resources } from "@/components/pages/Resources/Resources"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Resources"
}

const APage = async () => {
    return (
        <Resources />
    )
}

export default APage