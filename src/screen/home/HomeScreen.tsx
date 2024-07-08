import Home from "@/scenes/home/Home";
import { SelectedPage } from "@/shared/types";
import { useState } from "react";

export const HomeScreen = (): JSX.Element => {
    const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Dashboard)
    return (
      <div>
        <Home selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      </div>
    );
  };
  export default HomeScreen