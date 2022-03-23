import { Row, Col } from 'react-bootstrap';

import Button from '../../Components/Button/Button';
import CheckBox from '../../Components/CheckBox/CheckBox';
import Header from '../../Components/Header/Header';
import Input from '../../Components/Input/Input';
import Range from '../../Components/Range/Range';

export default function DesignContainer() {
  return (
    <>
      <Header title="Design Your Firm" />
      <Row className="d-flex justify-content-center pb-5">
        <div className="jumbotron container-shadow">
          <p className="text-justify">
            It's time to design your firm! With your team, work through each section below. When
            you're ready, click Confirm Design to lock your selections in.
          </p>
        </div>
      </Row>
      <form>
        <Row className="mt-5">
          <Col lg={6}>
            <h3>Identity</h3>
            <Input
              field_label="Firm Name:"
              input_type="text"
              input_placeholder="Enter firm name here"
              input_for="firm_name"
              input_name="firm_name"
            />
            <Input
              field_label="Firm Tagline:"
              input_type="text"
              input_placeholder="Enter firm Tagline here"
              input_for="firm_tagname"
              input_name="firm_tagname"
            />
            <Input
              field_label="Firm Values:"
              input_type="text"
              input_placeholder="Enter top 3 values here"
              input_for="firm_values"
              input_name="firm_values"
            />
            <Input
              field_label="Number of Partners:"
              input_type="number"
              input_placeholder=""
              input_for="firm_partners"
              input_name="firm_partners"
            />
          </Col>
          <Col lg={6}>
            <h3>Specialization</h3>
            <Range field_label="Expertise:" />
            <CheckBox field_label="Industries:" />
          </Col>
        </Row>
      </form>
      <div className="d-flex justify-content-center mt-5">
        <Button button_title="Confirm Design" />
      </div>
    </>
  );
}
