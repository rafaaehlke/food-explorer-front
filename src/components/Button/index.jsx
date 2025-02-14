
import { Container } from "./styles";

export function Button({ icon: Icon, title, ...props }) {
  return (
    <Container {...props}>
      {Icon && <Icon size={32} />}
      {title}
    </Container>
  );
}
