import { ContainerProps } from "../../types/shared.interface";

const Container = ({ children }: ContainerProps) => {
  return <section className="container">{children}</section>;
};

export default Container;
