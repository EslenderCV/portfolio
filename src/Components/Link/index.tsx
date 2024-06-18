import AnchorLink from "react-anchor-link-smooth-scroll";

interface Props {
  pageName: string;
  page: string;
}

const index = ({ pageName, page }: Props) => {
  return <AnchorLink>{pageName}</AnchorLink>;
};

export default index;
