import React from "react";

const Loading = () => {
  return (
    <div className="h-[100vh] flex items-center">
      <div class="flex-col gap-4 w-full flex items-center justify-center">
        <div class="w-20 h-20 border-4 border-transparent text-blue-400 text-4xl animate-spin flex items-center justify-center border-t-[#9F00FF] rounded-full">
          <div class="w-16 h-16 border-4 border-transparent text-2xl animate-spin flex items-center justify-center border-t-yellow-300 text-white rounded-full">
            .
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
