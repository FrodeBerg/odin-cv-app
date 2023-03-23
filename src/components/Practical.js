import React from "react";
import { InputField } from "./InputField";

export class Practical extends React.Component {
    render() {
        return (
            <div id={this.props.identifiers}>
                <button onClick={this.props.removePractical}>Remove</button>
                <InputField field="company" title="CompanyName: " function={this.props.setPracticalInput} value={this.props.value.company}/>
                <InputField field="position" title="Position Title: " function={this.props.setPracticalInput} value={this.props.value.position}/>
                <InputField field="tasks" title="Main Tasks: " function={this.props.setPracticalInput} value={this.props.value.tasks}/>
                <InputField field="time" title="From-To: " function={this.props.setPracticalInput} value={this.props.value.time}/>
            </div>
        )
    }
}
