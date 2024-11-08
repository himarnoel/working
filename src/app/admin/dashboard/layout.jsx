import Header from "@/components/Header";
import SideNav from "@/components/SideNav";

export default function Layout({ children }) {
  return (
    <div className=" w-full  ">
      <div className="flex  w-full h-screen">
        {" "}
        <SideNav />
        <div className="flex flex-col w-full flex-1 overflow-hidden ">
          <Header />
          <div className="h-screen w-full overflow-y-auto"><div className=" w-full"> {children}</div></div>
        </div>
      </div>
    </div>
  );
}
