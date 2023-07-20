import Image from "next/image"
import Link from "next/link"

export default function PagesLayout({ children }) {
    return (
        <div className="min-h-100vh flex grow bg-slate-50 dark:bg-navy-900">
            <div className="fixed top-0 hidden p-6 lg:block lg:px-12">
                <Link href="/" className="flex items-center space-x-2">
                    <Image className="h-12 w-12" src="/images/app-logo.svg" width={500} height={500} alt="logo" />
                    <p className="text-xl font-semibold uppercase text-slate-700 dark:text-navy-100">
                        ALIN
                    </p>
                </Link>
            </div>
            {children}
        </div>
    )
}