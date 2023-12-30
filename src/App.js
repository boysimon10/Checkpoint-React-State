import React, { Component } from 'react';

class App extends Component {
constructor(props) {
    super(props);
    this.state = {
        show: false,
        timeElapsed: 0,
        person: {
        fullName: 'John Doe',
        bio: 'Web Developer',
        imgSrc: 'https://via.placeholder.com/150',
        profession: 'Full Stack Developer'
        }
    };
}

componentDidMount() {
        this.interval = setInterval(
            () => this.setState({ timeElapsed: this.state.timeElapsed + 1 }),
            1000
    );
}

componentWillUnmount() {
    clearInterval(this.interval);
}

toggleShow = () => {
    this.setState({ show: !this.state.show });
};

render() {
    return (
        <div>
        <button onClick={this.toggleShow}>
            {this.state.show ? 'Hide' : 'Show'} Details
        </button>
        {this.state.show && (
            <div>
                <h1>{this.state.person.fullName}</h1>
                <h2>{this.state.person.profession}</h2>
                <img src={this.state.person.imgSrc} alt={this.state.person.fullName} />
                <p>{this.state.person.bio}</p>
            </div>
        )}
        <p>Temps: {this.state.timeElapsed} secondes</p>
    </div>
    );
}
}

export default App;