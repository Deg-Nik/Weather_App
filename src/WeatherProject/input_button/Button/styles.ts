import styled from "@emotion/styled"


interface ButtonComponentProps {
  $isRed: boolean
  $variant: "default" | "delete" 
  $fullWidth?: boolean
}


const generateButtonColor = (
  isRed: boolean,
  variant: "default" | "delete", 
  disabled: boolean | undefined,
) => {
  if (disabled) {
    return "#acacacff"
  }

  if (variant === "delete") {
    return "transparent" 
  }

  if (isRed) {
    return "#fc3333ff"
  }

  return "#3678B4"
}


const generateButtonColorOnHover = (
  isRed: boolean,
  variant: "default" | "delete", 
  disabled: boolean | undefined,
) => {
  if (disabled) {
    return "#acacacff"
  }

  if (variant === "delete") {
    return "rgba(255,255,255,0.1)" 
  }

  if (isRed) {
    return "#ff6868ff"
  }

  return "#5f90be"
}

export const ButtonComponent = styled.button<ButtonComponentProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;

  
  border: ${({ $variant }) =>
    $variant === "delete"
      ? "1px solid rgba(255,255,255,0.7)"
      : "none"};

  border-radius: 30px;
  padding: 0;
  height: 48px;
  width: 146px;

  width: ${({ $fullWidth }) => ($fullWidth ? "100%" : "146px")};


  
  background-color: ${({ $isRed, $variant, disabled }) =>
    generateButtonColor($isRed, $variant, disabled)};

  color: #ffffff;
  font-size: 20px;
  font-weight: bold;

  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};

  &:hover {
    background-color: ${({ $isRed, $variant, disabled }) =>
      generateButtonColorOnHover($isRed, $variant, disabled)};
  }
`
