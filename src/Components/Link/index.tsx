import AnchorLink from "react-anchor-link-smooth-scroll";
import { Dispatch, SetStateAction } from "react";

interface Props {
  pageName: string;
  page: string;
  setPage: Dispatch<SetStateAction<string>>;
}

const index = ({ pageName, page, setPage }: Props) => {
  const loweredPageName = pageName.toLowerCase().replace(/ /g, "");

  return (
    <AnchorLink
      className={loweredPageName === page ? "selected" : ""}
      onClick={() => setPage(loweredPageName)}
      href={`#${loweredPageName}`}
    >
      {pageName}
    </AnchorLink>
  );
};

export default index;
