export const Button = (props) => {
  return (
    <button className="button" onClick={props.onClickEvent}>
      {props.children}
    </button>
  );
};
