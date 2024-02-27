import { ReactNode } from "react";
import Navbar from "../components/Navbar";
import { Container } from "react-bootstrap";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Navbar />
      <Container>{children}</Container>
    </div>
  );
}
