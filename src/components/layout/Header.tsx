import { ReactNode } from "react";
import "./header.css";

interface IProps {
  section: string;
  hitCount: number;
  children?: ReactNode;
}

export const Header = (props: IProps) => {
  const { section, hitCount, children } = props;
  return (
    <section className="header">
      <h2>
        {section} ({hitCount})
      </h2>
      <div>{children}</div>
    </section>
  );
};
