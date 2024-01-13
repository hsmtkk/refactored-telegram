import { Link } from "@nextui-org/react";
import { Image } from "@nextui-org/react";

export default function Home() {
  return (
    <main>
      <div>
        <h1>I'm Abe Hiroki!</h1>
        <h3>JavaScript developer</h3>
      </div>
      <div>
        <h2>JavaScript Nerd</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti dignissimos reiciendis iste sed reprehenderit natus, ducimus voluptates minus sit porro molestiae corrupti officiis ipsa cupiditate facilis temporibus laborum voluptate enim.</p>
      </div>
      <div>
        <h2>Skills</h2>
        <div>
          <Image src="/images/javascript.svg" alt="javascript" width={300} /><span>JavaScript / 10 years</span>
          <Image src="/images/react.svg" alt="react" width={300} /><span>React / 5 years</span>
          <Image src="/images/gatsby.svg" alt="gatsby" width={300} /><span>GatsBy / 3 years</span>
        </div>
      </div>
      <Link href="/contact">Contactページに移動</Link>
    </main>
  )
}
