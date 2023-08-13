
interface Props {
  text: string;
  code?: string;
}

const ErrorMessage = ({ text, code }: Props) => {
  return (
    <div className="alert alert-danger" role="alert">
      {code && <h4 className="alert-heading">{code}</h4>}
      <p>{text}</p>
    </div>
  );
}

export default ErrorMessage;