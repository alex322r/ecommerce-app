
import Footer from "../../components/Footer";

export default function EcommerceLayout({ children }: { children: React.ReactNode }) {


    return (
        <>
            {children}
            <Footer />
        </>
    )

}