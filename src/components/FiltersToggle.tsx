import { Button } from "@fluentui/react-components";
import { DataFunnelFilled, DataFunnelRegular } from "@fluentui/react-icons";
interface IProps {
  showFilters: boolean;
  setShowFilters: (value: boolean) => void;
}
export const FiltersToggle = (props: IProps) => {
  const { showFilters, setShowFilters } = props;

  return (
    <Button
      style={{ marginLeft: "8px" }}
      icon={showFilters ? <DataFunnelFilled /> : <DataFunnelRegular />}
      onClick={() => setShowFilters(!showFilters)}
    />
  );
};
