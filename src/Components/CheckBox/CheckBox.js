import { Col, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import helpIcon from '../../Assets/Images/help-icon.svg';
import './CheckBox.css';

export default function CheckBox({ field_label }) {
  const checks = [
    'Financial Services',
    'Non-Profit',
    'Consumer Products',
    'Life Sciences',
    'Healthcare',
    'Technology,Media and Telecommunications',
    'Industrials',
  ];

  const display_checks = checks.map((cur, idx) => (
    <Col lg={6} key={`default-${idx}`}>
      <Form.Check type="checkbox" id={`default-${idx}`} label={cur} />
    </Col>
  ));

  return (
    <div className="d-flex flex-row mt-4 justify-content-between">
      <label className=" pt-2">{field_label}</label>
      <div className=" d-flex flex-row justify-content-between">
        <Row className="mb-3 ms-5">{display_checks}</Row>
        <img src={helpIcon} className="ms-4 help-icon" alt="help_icon" />
      </div>
    </div>
  );
}
