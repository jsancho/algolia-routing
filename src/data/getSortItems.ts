export interface ISortItem {
  label: string;
  value: string;
}

export const getSortItems = (index: string): ISortItem[] => {
  return [
    { label: "Relevance", value: index },
    {
      label: "Priority (asc)",
      value: `${index}_priority_asc`
    },
    {
      label: "Priority (desc)",
      value: `${index}_priority_desc`
    }
  ];
};
