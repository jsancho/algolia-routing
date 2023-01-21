import { Link } from "@fluentui/react-components";
import "./nav.css";

interface IProps {
  indexes: string[];
}
export const NavMenu = ({ indexes }: IProps) => {
  return (
    <nav className="links-container">
      {indexes.map(index => {
        return (
          <Link key={`link-${index}`} href={`${index}`}>
            {index}
          </Link>
        );
      })}
    </nav>
  );
};
