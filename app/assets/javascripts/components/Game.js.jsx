/**
 * Created by schandramouli on 3/15/17.
 */

var Game = React.createClass({
    getInitialState: function () {
        var totalPlayers = this.props.players.length;
        var flippedCards = [];
        for (var i = 0; i < totalPlayers; i++) {
            flippedCards.push(false);
        }
        return {
            title: this.props.game.title,
            totalPlayers: this.props.players.length,
            players: this.props.players,
            flippedCards: flippedCards
        }
    },
    getDefaultProps: function () {
        return {
            title: "",
            totalPlayers: 0,
            players: [],
            flippedCards: []
        }
    },
    flipAllCards: function () {
        var flippedCards = this.state.flippedCards.slice();
        for (var i = 0; i < this.state.totalPlayers; i++) {
            flippedCards[i] = !flippedCards[i];
        }
        this.setState({
            flippedCards: flippedCards
        });
    },
    isCardFlipped: function (cardIndex) {
        return this.state.flippedCards[cardIndex];
    },
    flipCard: function (cardIndex) {
        // kinda unneeded at this point
        var flippedCards = this.state.flippedCards.slice();
        flippedCards[cardIndex] = !flippedCards[cardIndex];
        this.setState({
            flippedCards: flippedCards
        });
    },
    dealCards: function () {
        var cards = [];
        for (x = 1; x <= this.state.totalPlayers; x++) {
            cards.push(<Card key={x} player={this.state.players[x - 1]} isFlipped={this.isCardFlipped(x - 1)} />);
        }
        return cards;
    },
    render: function() {
        return (
            <div>
                <FlipButton onclick={this.flipAllCards} />
                {this.dealCards()}
            </div>
        )
    }
});