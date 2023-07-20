import Image from "next/image"
import Link from "next/link"
import InputText from "@/components/atom/InputText";

export default function DashboardLayout({ children }) {
    return (
        <>
            <InputText></InputText>
            {children}
        </>
    )
}