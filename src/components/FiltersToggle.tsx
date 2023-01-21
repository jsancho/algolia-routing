import { Button } from "@fluentui/react-components";
import { DataFunnelFilled } from "@fluentui/react-icons";

{
  /* TODO 
    - add hide/show filters behaviour 
    - change icon to 'DataFunnelFilled' when not active 
*/
}
export const FiltersToggle = () => {
  return <Button style={{ marginLeft: "8px" }} icon={<DataFunnelFilled />} />;
};
