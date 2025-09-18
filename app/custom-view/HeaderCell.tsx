import { useCallback } from 'react';

type Props = {
  text: string;
  columnData: {
    field: string;
  }
  clickHandler: (params: {field: string}) => void
}

export function HeaderCell(props: Props) {
  const handleInternalClick = useCallback(() => {
    props.clickHandler({ field: props.columnData.field});
  }, [props.clickHandler]);

  return (
    <div onClick={handleInternalClick} className="cursor-pointer font-bold hover:underline hover:underline-offset-4">
      {props.text}
    </div>
  );
}
