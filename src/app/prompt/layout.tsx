import Banner from "@/app/banner";
import Nav from "@/app/nav";
export default function NavLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div className="flex flex-col bg-[url('/navWoman.png')] h-screen bg-cover bg-center overflow-x-hidden">
        <Banner></Banner>
        <Nav highlightIndex={2}></Nav>
        {children}
      </div>
    </div>
  );
}
