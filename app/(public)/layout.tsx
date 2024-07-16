import Footer from "../../components/footer"

export default function PublicLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <div className="d-flex flex-column w-100">
            {children}
            <Footer />
        </div>
    )
  }