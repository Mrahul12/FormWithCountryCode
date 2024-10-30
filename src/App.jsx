import React from "react";
// import { RecoilRoot } from'recoil'
// import CharacterCounter from "./Component/CharacterCounter";

import PhoneNumber from "./Component/PhoneNumber";

const App = () => {
    //* Components that use recoil state need RecoilRoot to appear somewhere in
    // *  the parent tree.
  return (
    <>
    
      {/* <RecoilRoot>
        <CharacterCounter />
      </RecoilRoot> */}

      <PhoneNumber/>
    </>
  );
};
export default App;
