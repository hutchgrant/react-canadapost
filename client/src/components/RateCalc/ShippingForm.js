import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import ShippingField from './ShippingField';
import formFields from './formFields';
import * as actions from '../../actions';

class ShippingForm extends Component {

    renderResults() {
        if(this.props.rate){
            return (
                <div className="text-center" style={{marginBottom: '10px'}}>
                    <p className="card-text text-danger">Priority(2 days): ${ this.props.rate[0].price.total }</p>
                    <p className="card-text text-primary">Regular(7 days): ${ this.props.rate[1].price.total }</p>
                    <p className="card-text text-success">Xpresspost(2 days): ${ this.props.rate[2].price.total }</p> 
                    <p className="card-text text-info">* Includes all taxes </p>
                </div>
            );       
        }
    }

    renderFields() {
        return _.map(formFields, ({label, name}) => {
            return <Field key={name} component={ShippingField} type="text" label={label} name={name} />
        });
    }

    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title text-center">Canada Post</h4>
                    <h6 className="card-subtitle mb-2 text-muted text-center">Shipping Calculator</h6>
                    {this.renderResults()}
                    <form onSubmit={this.props.handleSubmit(value => this.props.fetchRate(value))}>
                    <div className="form-group row justify-content-center">
                        {this.renderFields()}
                    </div>
                    <div className="row justify-content-center">
                    <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                    </form>
                </div>
            </div>
        );
    }

};

function validate(values) {
    const errors = {};

    _.each(formFields, ({ name }) => {
        if (!values[name]) {
            errors[name] = 'You must provide a value';
        }
    });

    return errors;
}

function mapStateToProps({rate }) {
        return { rate };
}

ShippingForm = reduxForm({
    validate,
    form: 'shippingForm',
    destroyOnUnmount: false
})(ShippingForm);
ShippingForm = connect(mapStateToProps, actions)(ShippingForm);

export default ShippingForm;