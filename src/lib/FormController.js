import React from 'react';

class FormController extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  /**
   * Return field data from form state or empty string if is not defined
   * @param fieldName
   * @returns {*|string}
   */
  getField(fieldName) {
    if (typeof this.state.form[fieldName] === 'undefined') {
      throw new Error(`Trying to get undefined field ${fieldName}`);
    }
    return this.state.form[fieldName];
  }

  /**
   * Update state when element is changed
   * @param fieldName
   * @returns {function(*)}
   */
  handleChange(fieldName) {
    return (event) => {
      const { form } = this.state;

      if (typeof form[fieldName] === 'boolean') {
        form[fieldName] = !form[fieldName];
      } else {
        form[fieldName] = event.target.value;
      }

      this.setState({ form });
    };
  }
}

export default FormController;
