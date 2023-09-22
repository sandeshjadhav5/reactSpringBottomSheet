// App.js
import React, { useState } from "react";
import BottomSheet from "./Components/BottomSheet";
import "./App.css";

function App() {
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

  const openBottomSheet = () => {
    setIsBottomSheetOpen(true);
  };

  const closeBottomSheet = () => {
    setIsBottomSheetOpen(false);
  };

  return (
    <div>
      <div className="btnDiv">
        {" "}
        <button
          onClick={openBottomSheet}
          className="css-button-sliding-to-top--green"
        >
          Open Bottom Sheet
        </button>
      </div>

      <BottomSheet isOpen={isBottomSheetOpen} onClose={closeBottomSheet}>
        <h2>Hello World !!!</h2>
        <p>Eat</p>
        <p>Sleep</p>
        <p>Code</p>
        <p>Repeat</p>
      </BottomSheet>
    </div>
  );
}

export default App;
