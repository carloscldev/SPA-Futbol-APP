const array = ['HTML', 'CSS', 'JavaScript', 'React', 'Python'];


class Frontend extends React.Component {
    state = {
        text: 'FrontEnd',
        integer: 1,
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 2000);
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick = () => {
        const { integer } = this.state;
        this.setState({
            text: array[integer],
            integer: (integer + 1) % array.length,
        });
    }
    render() {
        const { text } = this.state;
        return (
            <div>
                <h1 style={{ margin: '0', padding: '0', textAlign: 'center' }}>
                    {`<${text} />`}
                </h1>
            </div>
        )
    }
}

class State extends React.Component {
    render() {
        return (
            <div>
                <Frontend />
            </div>
        )
    }
}
ReactDOM.render(<State />, document.getElementById('state'));