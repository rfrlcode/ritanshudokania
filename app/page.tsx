import Container from "@/components/ui/container"
import Link from "next/link"
import Header from "@/components/Header";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <Container>
      <Header />
      <main className="flex-1">
      <div className="container flex flex-col space-y-2">
        <article className="pt-2">
          <div className="space-y-1">
            <h2 className="font-mono text-lg tracking-tight">projects</h2>
          </div>
          <ul className="space-y-4 py-4" >
          <li>
            <Link className="flex flex-col space-y-1.5 !no-underline" href="https://www.referralhub.xyz" target="_blank">
              <div>
                <span className="font-medium underline underline-offset-4 ">referralhub
                </span>
              </div>
                <span className="text-muted-foreground">Find referral codes for brands you love!</span>
            </Link>
          </li>
          <li>
            <Link className="flex flex-col space-y-1.5 !no-underline" href="https://www.dealshq.xyz" target="_blank">
              <div>
                <span className="font-medium underline underline-offset-4 ">dealshq
                </span>
              </div>
                <span className="text-muted-foreground">Find deals on products and brands you love!</span>
            </Link>
          </li>
          </ul>

          <div className="space-y-1 pt-6" >
            <h2 className="font-mono text-lg tracking-tight">roles</h2>
          </div>
          <ul className="space-y-4 py-4" >
          <li>
            <Link className="flex flex-col space-y-1.5 !no-underline" href="https://wing.com/" target="_blank">
              <div>
                <span className="font-medium underline underline-offset-4 ">wing
                </span>
              </div>
                <span className="text-muted-foreground">technical program manager</span>
            </Link>
          </li>
          <li>
            <Link className="flex flex-col space-y-1.5 !no-underline" href="https://www.tesla.com" target="_blank">
              <div>
                <span className="font-medium underline underline-offset-4 ">tesla
                </span>
              </div>
                <span className="text-muted-foreground">mechanical engineer + engineering program manager</span>
            </Link>
          </li>
          <li>
            <Link className="flex flex-col space-y-1.5 !no-underline" href="https://waymo.com/" target="_blank">
              <div>
                <span className="font-medium underline underline-offset-4 ">waymo
                </span>
              </div>
                <span className="text-muted-foreground">mechanical engineering intern</span>
            </Link>
          </li>
          <li>
            <Link className="flex flex-col space-y-1.5 !no-underline" href="https://www.canoo.com" target="_blank">
              <div>
                <span className="font-medium underline underline-offset-4 ">canoo
                </span>
              </div>
                <span className="text-muted-foreground">mechanical engineering intern</span>
            </Link>
          </li>
          <li>
            <Link className="flex flex-col space-y-1.5 !no-underline" href="https://www.fiskerinc.com" target="_blank">
              <div>
                <span className="font-medium underline underline-offset-4 ">fisker
                </span>
              </div>
                <span className="text-muted-foreground">battery engineering intern</span>
            </Link>
          </li>
          <li>
            <Link className="flex flex-col space-y-1.5 !no-underline" href="https://www.appliedmaterials.com" target="_blank">
              <div>
                <span className="font-medium underline underline-offset-4 ">applied materials
                </span>
              </div>
                <span className="text-muted-foreground">technical program manager</span>
            </Link>
          </li>
          </ul>
          
        </article>
      </div>
      </main>
      <Footer />
    </Container>

  )
}
