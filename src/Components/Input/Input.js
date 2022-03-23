import './Input.css';
import helpIcon from '../../Assets/Images/help-icon.svg';

export default function Input({
  field_label,
  input_type,
  input_placeholder,
  input_for,
  input_name,
}) {
  return (
    <div className="d-flex flex-row mt-4 justify-content-between">
      <label className=" pt-2">{field_label}</label>
      <div>
        <input
          type={input_type}
          placeholder={input_placeholder}
          htmlFor={input_for}
          name={input_name}
        />
        <img src={helpIcon} className="ms-4 help-icon" alt="help_icon" />
      </div>
    </div>
  );
}
