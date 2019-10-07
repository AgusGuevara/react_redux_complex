import React from 'react'
import { connect } from 'react-redux'
import { createStreams } from '../../actions/index'
import StreamForm from './StreamForm'


class StreamCreate extends React.Component{
    onSubmit = (formValues) => {
        this.props.createStreams(formValues)
    }
    
    render(){
        return(
            <div>
                <h3>Crear un Stream</h3>
                <StreamForm onSubmit={this.onSubmit}/>
            </div>
        ) 
    }
}

export default connect(null, { createStreams })(StreamCreate)
