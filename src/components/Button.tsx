type Props = {
  children: JSX.Element | string;
};

export const Button = (props: Props): JSX.Element => {
  return <button>{props.children}</button>;
};
