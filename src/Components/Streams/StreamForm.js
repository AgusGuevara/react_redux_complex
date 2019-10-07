import React from 'react'
import { Field, reduxForm } from 'redux-form'


class StreamForm extends React.Component{
    renderError({error, touched}){
        if(error && touched){
            return (
                <div className='ui error message'>
                    <div className="header">{error}</div>
                </div>
            )
        }
    }

    renderInput = ({ input, label, meta}) => {
        const className = `field ${meta.error && meta.touched ? 'error': ''}`
        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} autoComplete='off'/>
                {this.renderError(meta)}
            </div>
        )
    }  
    
    onSubmit = (formValues) => {
        this.props.onSubmit(formValues)
    }
    
    render(){
        return(
            <div>
                <div>Stream Create page</div>
                <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                <Field name='title' component={this.renderInput} label="Titulo"/>
                <Field name='description' component={this.renderInput} label="Descripcion" />
                <button className="ui button primary">Submit</button>
            </form>
            </div>
        ) 
        
    }
}

const validate = (formValues) => {
    let errors = {}
    if(!formValues.title){
         errors.title = 'Debes ingresar un titulo'     
    }
    if (!formValues.description){
         errors.description = 'El stream debe tener una descripcion'
    }
    return errors
}


export default reduxForm({
    form : 'streamForm',
    validate
})(StreamForm)

