import SearchBar from "./SearchBar";
import "./header.css";

interface IProps {
  section: string;
  hitCount: number;
}

export const Header = (props: IProps) => {
  const { section, hitCount } = props;
  return (
    <section className="header">
      <h2>
        {section} ({hitCount})
      </h2>
      <SearchBar />
    </section>
  );
};
