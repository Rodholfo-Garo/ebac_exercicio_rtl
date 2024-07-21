import { fireEvent, render, screen } from "@testing-library/react";
import PostComment from ".";

describe("Teste para o componente PostComment", () => {
  test("Deve renderizar o componente corretamente", () => {
    render(<PostComment />);

    expect(screen.getByText("Comentar")).toBeInTheDocument();
  });

  test("Deve adicionar dois comentários", () => {
    const { debug } = render(<PostComment />);

    // adiciona o primeiro comentário
    fireEvent.change(screen.getByTestId("texto-comentario"), {
      target: {
        value: "Meu Primeiro Comentario",
      },
    });
    fireEvent.click(screen.getByTestId("btn-comentario"));

    // adiciona o segundo comentário
    fireEvent.change(screen.getByTestId("texto-comentario"), {
      target: {
        value: "Meu Segundo Comentario",
      },
    });
    fireEvent.click(screen.getByTestId("btn-comentario"));

    debug();
    expect(screen.getAllByTestId("total-comentario")).toHaveLength(2);
  });
});
