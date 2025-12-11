import { Component } from 'react'

class ErrorBoundary extends Component {
    constructor(props) {
        super(props)

        this.state = { hasError: false }
    }
    componentDidCatch(error, errorInfo) {
        this.setState({ hasError: true })
    }
    render() {
        if (this.state.hasError) {
            return (
                <div>
                    <h1>Data Failed to fetch, Please try again.....</h1>
                </div>
            )
        }
        return this.props.children
    }
}

export default ErrorBoundary
