import { Image, Link } from "@nextui-org/react"

const Header = () => {
    return (
        <header>
            <div>
                <div>
                    <Link href="/">
                        <Image src="/images/logo.png" alt="logo" />
                    </Link>
                    <ul>
                        <li><Link href="/blog">Blog</Link></li>
                        <li><Link href="/contact">Contct</Link></li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header