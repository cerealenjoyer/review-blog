import { parseISO, format } from "date-fns";

function Date({ dateString }) {
  const date = parseISO(dateString);
  return (
    <time dateTime={dateString}>{format(date, "do 'of' LLLL, yyyy")}</time>
  );
}

export default Date;
