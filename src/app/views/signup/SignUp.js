import React from "react";
import { Form, Icon, Input, Button } from "antd";
import { connect } from "react-redux";
import { signUp } from "../../actions/authActions";
import "./SignUp.scss";

const FormItem = Form.Item;

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class HorizontalLoginForm extends React.Component {
  componentDidMount() {
    // To disabled submit button at the beginning.
    this.props.form.validateFields();
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        const result = await this.props.signUp(values);
        console.log(result);
        console.log("Received values of form: ", values);
      }
    });
  };

  render() {
    const {
      getFieldDecorator,
      getFieldsError,
      getFieldError,
      isFieldTouched
    } = this.props.form;
    const { authError } = this.props;

    // Only show error after a field is touched.
    const emailError = isFieldTouched("email") && getFieldError("email");
    const nameError = isFieldTouched("name") && getFieldError("name");
    const passwordError =
      isFieldTouched("password") && getFieldError("password");
    return (
      <div className="container">
        <h1>Sign Up</h1>
        <Form onSubmit={this.handleSubmit.bind(this)}>
          <FormItem
            validateStatus={emailError ? "error" : ""}
            help={emailError || ""}
          >
            {getFieldDecorator("email", {
              rules: [
                { required: true, message: "Please input your email!" },
                {
                  type: "email",
                  message: "The input is not valid E-mail!"
                }
              ]
            })(
              <Input
                prefix={
                  <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="email"
              />
            )}
          </FormItem>
          <FormItem
            validateStatus={passwordError ? "error" : ""}
            help={passwordError || ""}
          >
            {getFieldDecorator("password", {
              rules: [
                { required: true, message: "Please input your Password!" }
              ]
            })(
              <Input
                prefix={
                  <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                type="password"
                placeholder="Password"
              />
            )}
          </FormItem>
          <FormItem
            validateStatus={nameError ? "error" : ""}
            help={nameError || ""}
          >
            {getFieldDecorator("name", {
              rules: [{ required: true, message: "Please input your name!" }]
            })(
              <Input
                prefix={
                  <Icon type="contacts" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                type="name"
                placeholder="name"
              />
            )}
          </FormItem>
          <div>{authError ? <p>{authError}</p> : null}</div>

          <FormItem>
            <Button
              type="primary"
              htmlType="submit"
              className="submit-btn"
              loading={this.props.isSendingRequest}
              disabled={hasErrors(getFieldsError())}
            >
              Sign Up
            </Button>
          </FormItem>
        </Form>
      </div>
    );
  }
}

const WrappedHorizontalLoginForm = Form.create()(HorizontalLoginForm);
const mapStateToProps = state => {
  return {
    authError: state.auth.authError,
    isSendingRequest: state.auth.isSendingRequest,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    signUp: newUser => dispatch(signUp(newUser))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WrappedHorizontalLoginForm);
