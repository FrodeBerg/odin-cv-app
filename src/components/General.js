import React from "react";

export class General extends React.Component {

    render() {
        return (
            <div className="general">
                <InputField field="Name" title="Full Name: " function={this.props.setInput}/>
                <InputField field="Email" title="Email: " function={this.props.setInput}/>
                <InputField field="Phone" title="Phone Number: " function={this.props.setInput}/>
            </div>
        )
    }
}

class InputField extends React.Component {

    render() {
        return (
            <div>
                <label htmlFor={this.props.field}>{this.props.title}</label>
                <input
                name={this.props.field} 
                onChange={this.props.function}
                />
            </div>            
        )
    }
}