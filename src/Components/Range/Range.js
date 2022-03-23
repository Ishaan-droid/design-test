import Form from 'react-bootstrap/Form';
import './Range.css';
import helpIcon from '../../Assets/Images/help-icon.svg';

export default function Range({ field_label }) {
  return (
    <div className="d-flex flex-row justify-content-between mt-4">
      <label className=" pt-2">{field_label}</label>
      <div>
        <Form.Range className="mt-2" />
        <img src={helpIcon} className="ms-4 mb-3 help-icon" alt="help_icon" />
      </div>
    </div>
  );
}
