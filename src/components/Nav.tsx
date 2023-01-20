import "./nav.css";

interface IProps {
  setIndexName: any;
}

export const Nav = ({ setIndexName }: IProps) => {
  return (
    <div className="links-container">
      <span onClick={() => setIndexName("stays")}>Stays</span>
      <span onClick={() => setIndexName("workjobs")}>WorkJobs</span>
    </div>
  );
};
