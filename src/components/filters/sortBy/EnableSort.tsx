interface IProps {
  onChange: (checked: boolean) => void;
}

export const EnableSort = (props: IProps) => {
  const { onChange } = props;
  return (
    <div>
      <input
        type="checkbox"
        name="enableSorting"
        onChange={(event: any) => onChange(event.target.checked)}
      />
      <label htmlFor="enableSorting">Enable Sorting</label>
    </div>
  );
};
