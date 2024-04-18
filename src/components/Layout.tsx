import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { useEffect } from "react";

// export const Layout: React.FC = () => {
//   return (
//     <>
//       <div className="layout">
//         <div className="lines">
//           <div className="line">
//             <div className="line__element">1</div>
//           </div>
//           <div className="line">
//             <div className="line__element">2</div>
//           </div>
//           <div className="line">
//             <div className="line__element">3</div>
//           </div>
//           <div className="line">
//             <div className="line__element">4</div>
//           </div>
//         </div>
//         <Header />
//         <Outlet />
//       </div>
//     </>
//   );
// };

export const Layout: React.FC = () => {
  useEffect(() => {
    const updateLineHeight = () => {
      const lines = document.querySelectorAll(".line__element");
      const bodyHeight = document.body.scrollHeight + "px";
      lines.forEach((line) => {
        (line as HTMLElement).style.height = bodyHeight;
      });
    };

    window.addEventListener("resize", updateLineHeight);
    updateLineHeight();

    return () => window.removeEventListener("resize", updateLineHeight);
  }, []);

  return (
    <>
      <div className="layout">
        <div className="linesContainer">
          <div className="lines">
            <div className="line">
              <div className="line__element"></div>
            </div>
            <div className="line">
              <div className="line__element line2"></div>
            </div>
            <div className="line">
              <div className="line__element"></div>
            </div>
            <div className="line">
              <div className="line__element"></div>
            </div>
          </div>
        </div>
        <Header />
        <Outlet />
      </div>
    </>
  );
};
