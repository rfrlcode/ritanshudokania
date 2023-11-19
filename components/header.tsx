import { ModeToggle } from "@/components/mode-toggle"
import Link from "next/link"

const Header = () => {
  return (
    <header>
        <div className="flex items-center justify-between">
        
        <nav className="text-sm font-medium space-x-6">
            {/* <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            
            <Link href="https://electrek.co/" target="_blank">Electrek</Link> */}
            Ritanshu Dokania
            <p>Engineer</p>
        </nav>
        <ModeToggle />
        </div>
    </header>
  )
}

export default Header