import { useRef, useState } from "react";

const useTransitionStyles = (timeout: number) => {
  const nodeRef = useRef<HTMLDivElement | null>(null);
  const [style, setStyle] = useState<React.CSSProperties>({
    opacity: 1,
    transform: "translate(-25px, 25px)",
    zIndex: 1,
    transition: `opacity ${timeout}ms ease-out, transform ${timeout}ms ease`,
  });

  const onEnter = () => {
    setStyle({
      opacity: 0,
      transform: "translate(-25px,20px )",
      zIndex: 1,
    });
  };

  const onEntering = () => {
    setStyle({
      opacity: 1,
      transform: "translate(0, 0)",
    });
  };

  const onEntered = () => {
    setStyle({
      opacity: 1,
      transform: "translate(0, 0)",
    });
  };

  const onExit = () => {
    setStyle({
      opacity: 0,
      transform: "translate(0, 0)",
    });
  };

  const onExiting = () => {
    setStyle({
      opacity: 1,
      transform: "translate( 30px, 20px)",
      transition: `opacity ${timeout}ms ease-out, transform ${timeout}ms ease`,
    });
  };

  return { nodeRef, style, onEnter, onEntering, onEntered, onExit, onExiting };
};

export default useTransitionStyles;
