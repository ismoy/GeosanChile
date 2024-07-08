import React from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { SelectedPage } from "./types"

type Props = {
  children: React.ReactNode;
  setSelectedPage: (value: SelectedPage) => void;
};

const ActionButton = ({ children, setSelectedPage }: Props) => {
    return (
      <div id={SelectedPage.Contacto}>
        <AnchorLink
          className="rounded-md bg-primary-500 px-10 py-2 text-white hover:bg-color-yelow hover:text-primary-300"
          onClick={() => setSelectedPage(SelectedPage.Contacto)}
          href={`#${SelectedPage.Contacto}`}
        >
          {children}
        </AnchorLink>
      </div>
    );
  };
  

export default ActionButton;
