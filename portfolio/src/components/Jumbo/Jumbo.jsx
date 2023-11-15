import React from "react";
import "./jumbo.css"; // 确保这里的路径指向你的 CSS 文件

function Jumbo() {
  return (
    <main>
      <div className="relative flex flex-col h-[100vh] items-center justify-center bg-white dark:bg-black transition-bg">
        <div className="absolute inset-0 overflow-hidden">
          <div className="jumbo absolute -inset-[10px] opacity-50"></div>
        </div>
      </div>
    </main>
  );
}

export default Jumbo;
