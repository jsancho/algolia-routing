import { Link } from "@fluentui/react-components";
import "./nav.css";

interface IProps {
  indexes: string[];
}
export const NavMenu = ({ indexes }: IProps) => {
  return (
    <div className="links-container">
      {indexes.map(index => {
        return (
          <Link key={`link-${index}`} href={`${index}`}>
            {index}
          </Link>
        );
      })}
    </div>
  );
};
