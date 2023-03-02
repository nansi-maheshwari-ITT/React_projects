import { AuthButtonProps } from "./AuthButtonProps";
import { AuthBtn } from "./AuthButtonStyle";
export const AuthButton: React.FC<AuthButtonProps> = ({
  authButtonText,
  handleStatusChange,
}) => {
  return <AuthBtn onClick={handleStatusChange}>{authButtonText}</AuthBtn>;
};
