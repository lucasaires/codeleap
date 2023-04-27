import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Input } from "./index";
import { ThemeProvider } from "styled-components";
import { theme } from "../../styles/themes/theme";

describe("Input component tests", () => {
  test("should render component without errors", () => {
    render(
      <ThemeProvider theme={theme}>
        <Input />
      </ThemeProvider>
    );
  });

  test("should call onChange function when input changes", () => {
    const onChange = jest.fn();
    const { getByRole } = render(
      <ThemeProvider theme={theme}>
        <Input onChange={onChange} />
      </ThemeProvider>
    );
    const input = getByRole("textbox");
    fireEvent.change(input, { target: { value: "test" } });
    expect(onChange).toHaveBeenCalled();
  });
});
