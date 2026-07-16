"use client";

import Sidebar from "./Sidebar";
import Header from "./Header";


interface MainLayoutProps {
  children: React.ReactNode;
}



const MainLayout = ({
  children,
}: MainLayoutProps) => {


  return (

    <div
      className="
        flex
        h-screen
        overflow-hidden
        bg-background
        text-foreground
      "
    >


      {/* Sidebar */}
      <Sidebar />



      {/* Main Area */}
      <div
        className="
          flex-1
          flex
          flex-col
          min-w-0
        "
      >


        <Header />



        <main
          className="
            flex-1
            overflow-hidden
          "
        >

          {children}

        </main>


      </div>


    </div>

  );

};


export default MainLayout;