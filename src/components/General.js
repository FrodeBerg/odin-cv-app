import React from "react";
import { InputField } from "./InputField";

export class General extends React.Component {

    render() {
        return (
            <div className="general">
                <InputField field="Name" title="Full Name: " function={this.props.setInput} value={this.props.value.Name}/>
                <InputField field="Email" title="Email: " function={this.props.setInput} value={this.props.value.Email}/>
                <InputField field="Phone" title="Phone Number: " function={this.props.setInput} value={this.props.value.Phone}/>
            </div>
        )
    }
}

