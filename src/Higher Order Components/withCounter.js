import React from 'react'
//Higher Order Components are React Components that take a component as an argument and return a new component.
//They are used to share common functionality without repearting code.
const UpdatedComponent = (OriginalComponent) => {
    class NewComponent extends React.Component {
        constructor(props) {
            super(props)

            this.state = {
                count: 0
            }
        }
        increamentCount = () => {
            this.setState(prevState => {
                return { count: prevState.count + 1 }
            })
        }
        render() {
            console.log(this.props.name);
            return (
                <OriginalComponent 
                count={this.state.count} 
                increamentCount={this.increamentCount} 
                {...this.props}
                />
            )
        }
    }
    return NewComponent;
}
export default UpdatedComponent;