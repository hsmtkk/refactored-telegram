import { Image, Link } from "@nextui-org/react"

const Footer = () => {
    return (
        <header>
            <div>
                <div>
                    <Link href="https://www.example.com">
                        <Image src="/images/github.svg" alt="github" />
                    </Link>
                    <Link href="https://www.example.com">
                        <Image src="/images/linkedin.svg" alt="linkedin" />
                    </Link>
                    <Link href="/blog">Blog</Link>
                    <Link href="/contact">Contct</Link>
                </div>
            </div>
        </header>
    )
}

export default Footer