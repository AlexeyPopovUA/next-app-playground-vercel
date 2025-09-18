type Props = {
  text: string;
}

export function HeaderCell(props: Props) {
  return (
    <div className="cursor-pointer font-bold hover:underline hover:underline-offset-4">
      {props.text}
    </div>
  );
}
