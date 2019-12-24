export { default as InputPassword } from "./inputPassword";
export { default as InputText } from "./inputText";
export interface IPropsInput {
  _label?: string;
  value?: string;
  onChange?: (e: any) => void;
  name?: string;
  onKeyPress?: (e: any) => void;
}
