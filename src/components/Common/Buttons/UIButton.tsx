interface ButtonProps{
onClick?:Function,
css?:string,
icon?:any,
title:string
}

export const UIButton = (props: ButtonProps) => {
  const onClick = () => {
    props.onClick && props.onClick();
  };
  return (
    <div
      className={props.css}
      style={{
        width: "100%",
      }}
    >
      <button
        className="bg-primary p-4 font-secondary rounded text-neutral font-semibold mt-4 hover:bg-primaryFocus"
        onClick={onClick}
      >
        {props.icon && props.icon}
        {props.title && props.title}
      </button>
    </div>
  );
};
