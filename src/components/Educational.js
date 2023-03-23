import React from "react";
import { InputField } from "./InputField";

export class Educational extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.props.addEducational}>Add</button>
                <InputField field="school" title="School Name: " function={this.props.setEducationalInput}/>
                <InputField field="title" title="Title Of Study: " function={this.props.setEducationalInput}/>
                <InputField field="date" title="Date Of Study: " function={this.props.setEducationalInput}/>
            </div>
        )
    }
}