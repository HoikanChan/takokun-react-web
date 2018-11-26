import React from "react";
import { Form, Icon, Input, Button } from "antd";
import { connect } from "react-redux";
import { signIn, clearError } from "../../actions/authActions";
import "./SignIn.scss";

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
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.signIn(values);
        console.log("Received values of form: ", values);
      }
    });
  };
  clearError = () => {
    this.props.authError && this.props.clearError();
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
    const passwordError =
      isFieldTouched("password") && getFieldError("password");
    return (
      <div className="container">
        <div>{authError ? <p>{authError}</p> : null}</div>
        <h1>Sign In</h1>
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
                onFocus={this.clearError.bind(this)}
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
                onFocus={this.clearError}
                prefix={
                  <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                type="password"
                placeholder="Password"
              />
            )}
          </FormItem>
          <FormItem>
            <Button
              type="primary"
              htmlType="submit"
              className="submit-btn"
              loading={this.props.isSendingRequest}
              disabled={hasErrors(getFieldsError())}
            >
              Log in
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
    isSendingRequest: state.auth.isSendingRequest
  };
};
const mapDispatchToProps = dispatch => {
  return {
    signIn: credentials => dispatch(signIn(credentials)),
    clearError: () => dispatch(clearError())
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WrappedHorizontalLoginForm);
