import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { Button } from "./index";
import { describe, expect, jest, test } from "@jest/globals";
import "@testing-library/jest-dom/extend-expect";
import { ThemeProvider } from "styled-components";
import { theme } from "../../styles/themes/theme";

describe("Button", () => {
  test("calls the onClick function when clicked", () => {
    const onClick = jest.fn();
    const { getByRole } = render(
      <ThemeProvider theme={theme}>
        <Button onClick={onClick}>Click me</Button>
      </ThemeProvider>
    );
    const button = getByRole("button");
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalled();
  });
});
