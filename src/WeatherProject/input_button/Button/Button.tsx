import { type ButtonProps } from "./types";
import { ButtonComponent } from "./styles";

function Button({
  name,
  type = "button",          
  onClick,
  isRed = false,            
  variant = "default",      
  isDisabled = false,       
  $fullWidth,
}: ButtonProps) {
  return (
    <ButtonComponent
      disabled={isDisabled} 
      $isRed={isRed}        
      $variant={variant}   
      $fullWidth={$fullWidth}
      className="button_component"
      type={type}
      onClick={onClick}
    >
      {name}
    </ButtonComponent>
  );
}

export default Button;
