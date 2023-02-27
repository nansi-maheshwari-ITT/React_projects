import { AuthButtonProps } from "./AuthButtonProps";
import { AuthBtn } from "./AuthButtonStyle";
export const AuthButton: React.FC<AuthButtonProps> = ({
  AuthButtonText,
  handleStatusChange,
}) => {
  return <AuthBtn onClick={handleStatusChange}>{AuthButtonText}</AuthBtn>;
};
