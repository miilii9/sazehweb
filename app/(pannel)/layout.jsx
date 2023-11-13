import MobileMenu from "../../components/MobileMenu";
import "../../styles/globals.css";
import Navigation from "@/components/MainNavigation";
export default function Layout({ children }) {
  return (
    <html dir="rtl" lang="fa-IR">
      <body className=" font-body bg-[#FAFAFA]">
        <Navigation />
        {children}
      </body>
      <MobileMenu />
    </html>
  );
}
