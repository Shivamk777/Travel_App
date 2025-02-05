import Image from "next/image"
import Link from "next/link"

const Navbar = () => {
  return (
    <nav>
      <Link href="/"></Link>
      <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} ></Image>
    </nav>
  )
}

export default Navbar
