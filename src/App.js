import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class App extends Component {
constructor(props) {
    super(props);
    this.state = {
        show: false,
        timeElapsed: 0,
        person: {
        fullName: 'Jules Ndiaye',
        bio: `jules Ndiaye est un développeur web Full Stack passionné par la création d'applications innovantes et conviviales.`,
        imgSrc: 'https://media.istockphoto.com/id/1075599562/photo/programmer-working-with-program-code.jpg?s=612x612&w=0&k=20&c=n3Vw5SMbMCWW1YGG6lnTfrwndNQ8B_R4Vw-BN7LkqpA=',
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
        <div style={{}}>
        <Button onClick={this.toggleShow} variant="dark">
            {this.state.show ? 'Hide' : 'Show'} Details
        </Button>
        {this.state.show && (
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={this.state.person.imgSrc} alt={this.state.person.fullName} />
                <Card.Body>
                    <Card.Title>{this.state.person.fullName}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{this.state.person.profession}</Card.Subtitle>
                    <Card.Text>{this.state.person.bio}</Card.Text>
                </Card.Body>
            </Card>
        )}
        <p>Temps: {this.state.timeElapsed} secondes</p>
    </div>
    );
}
}

export default App;