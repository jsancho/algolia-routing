import { Link } from "@fluentui/react-components";
import "./nav.css";

interface IProps {
  sections: string[];
}
export const NavMenu = ({ sections }: IProps) => {
  return (
    <div className="links-container">
      {sections.map(section => {
        return (
          <Link key={`link-${section}`} href={`${section}`}>
            {section}
          </Link>
        );
      })}
    </div>
  );
};
