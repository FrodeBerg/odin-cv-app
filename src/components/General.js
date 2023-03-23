import React from "react";

export class General extends React.Component {

    render() {
        return (
            <div className="general">
                <InputField field="Name" function={this.props.setInput}/>
                <InputField field="Email" function={this.props.setInput}/>
                <InputField field="Phone" function={this.props.setInput}/>
            </div>
        )
    }
}

class InputField extends React.Component {

    render() {
        return (
            <div>
                <label htmlFor={this.props.field}>{this.props.field}</label>
                <input
                name={this.props.field} 
                onChange={this.props.function}
                />
            </div>            
        )
    }
}