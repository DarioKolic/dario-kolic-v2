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

// https://docs.google.com/spreadsheets/d/1gHnt7iLJuxhM77Vv0ez_psWkANjtFwbA5AneFfMZGD4/edit?usp=sharing