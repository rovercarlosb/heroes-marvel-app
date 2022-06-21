type Props = {
  children: JSX.Element | string;
};

export const Button = (props: Props): JSX.Element => {
  return <button className="animate__animated">{props.children}</button>;
};
