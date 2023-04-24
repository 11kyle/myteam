import Banner from "../banner";
import Footer from "../footer";
import Navbar from "../navbar";

interface Props {
  children: React.ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Navbar />
      {children}
      <Banner />
      <Footer />
    </>
  )
}
