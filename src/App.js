import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class App extends Component {
    constructor(props) {
        super(props);
        // État initial de l'application
        this.state = {
            show: false, // Contrôle l'affichage des détails de la personne
            timeElapsed: 0, // Temps écoulé depuis le chargement de la page en secondes
            person: {
                fullName: 'Jules Ndiaye',
                bio: `jules Ndiaye est un développeur web Full Stack passionné par la création d'applications innovantes et conviviales.`,
                imgSrc: 'https://media.istockphoto.com/id/1075599562/photo/programmer-working-with-program-code.jpg?s=612x612&w=0&k=20&c=n3Vw5SMbMCWW1YGG6lnTfrwndNQ8B_R4Vw-BN7LkqpA=',
                profession: 'Full Stack Developer'
            }
        };
    }

    componentDidMount() {
        // Met à jour l'état timeElapsed chaque seconde
        this.interval = setInterval(
            () => this.setState({ timeElapsed: this.state.timeElapsed + 1 }),
            1000
        );
    }

    componentWillUnmount() {
        // Nettoie l'intervalle pour éviter les fuites de mémoire
        clearInterval(this.interval);
    }

    // Fonction pour basculer l'affichage des détails de la personne
    toggleShow = () => {
        this.setState({ show: !this.state.show });
    };

    render() {
        return (
            <div style={{}}>
                {/* Bouton pour afficher ou masquer les détails */}
                <Button onClick={this.toggleShow} variant="dark">
                    {this.state.show ? 'Hide' : 'Show'} Details
                </Button>
                {/* Affichage des détails de la personne si show est vrai */}
                {this.state.show && (
                    <Card style={{ width: '18rem' }}>
                        {/* Image de la personne */}
                        <Card.Img variant="top" src={this.state.person.imgSrc} alt={this.state.person.fullName} />
                        <Card.Body>
                            {/* Nom et profession de la personne */}
                            <Card.Title>{this.state.person.fullName}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{this.state.person.profession}</Card.Subtitle>
                            {/* Biographie de la personne */}
                            <Card.Text>{this.state.person.bio}</Card.Text>
                        </Card.Body>
                    </Card>
                )}
                {/* Affichage du temps écoulé depuis le chargement de la page */}
                <p>Temps: {this.state.timeElapsed} secondes</p>
            </div>
        );
    }
}

export default App;