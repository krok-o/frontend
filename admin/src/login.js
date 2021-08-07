import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { propTypes, reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';

// import { Notification, translate, userLogin as userLoginAction } from 'admin-on-rest';
function getColorsFromTheme(theme) {
    if (!theme) return { primary1Color: cyan500, accent1Color: pinkA200 };
    const {
        palette: {
            primary1Color,
            accent1Color,
        },
      } = theme;
    return { primary1Color, accent1Color };
}

// see http://redux-form.com/6.4.3/examples/material-ui/
const renderInput = ({ meta: { touched, error } = {}, input: { ...inputProps }, ...props }) =>
    <TextField
        errorText={touched && error}
        {...inputProps}
        {...props}
        fullWidth
    />;

class Login extends Component {

    login = ({ email, apikeyid, apikeysecret }) => {
        const { userLogin, location } = this.props;
        userLogin({ email, apikeyid, apikeysecret }, location.state ? location.state.nextPathname : '/');
    }

    render() {
        const { handleSubmit, submitting, theme, translate } = this.props;
        const muiTheme = getMuiTheme(theme);
        const { primary1Color, accent1Color } = getColorsFromTheme(muiTheme);
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div style={{ ...styles.main, backgroundColor: primary1Color }}>
                    <Card style={styles.card}>
                        <div style={styles.avatar}>
                            <Avatar backgroundColor={accent1Color} icon={<LockIcon />} size={60} />
                        </div>
                        <form onSubmit={handleSubmit(this.login)}>
                            <div style={styles.form}>
                                <p style={styles.hint}>Hint: demo / demo</p>
                                <div style={styles.input} >
                                    <Field
                                        name="email"
                                        component={renderInput}
                                        floatingLabelText={translate('aor.auth.email')}
                                    />
                                </div>
                                <div style={styles.input}>
                                    <Field
                                        name="apikeyid"
                                        component={renderInput}
                                        floatingLabelText={translate('aor.auth.apikeyid')}
                                    />
                                </div>
                                <div style={styles.input}>
                                    <Field
                                        name="apikeysecret"
                                        component={renderInput}
                                        floatingLabelText={translate('aor.auth.apikeysecret')}
                                        type="password"
                                    />
                                </div>
                            </div>
                            <CardActions>
                                <RaisedButton type="submit" primary disabled={submitting} label={translate('aor.auth.sign_in')} fullWidth />
                            </CardActions>
                        </form>
                    </Card>
                    <Notification />
                </div>
            </MuiThemeProvider>
        );
    }
}

Login.propTypes = {
    ...propTypes,
    authClient: PropTypes.func,
    previousRoute: PropTypes.string,
    theme: PropTypes.object.isRequired,
    translate: PropTypes.func.isRequired,
};

Login.defaultProps = {
    theme: {},
};

const enhance = compose(
    translate,
    reduxForm({
        form: 'signIn',
        validate: (values, props) => {
            const errors = {};
            const { translate } = props;
            if (!values.email) errors.email = translate('aor.validation.required');
            if (!values.apikeyid) errors.apikeyid = translate('aor.validation.required');
            if (!values.apikeysecret) errors.apikeysecret = translate('aor.validation.required');
            return errors;
        },
    }),
    connect(null, { userLogin: userLoginAction }),
);

export default enhance(Login);