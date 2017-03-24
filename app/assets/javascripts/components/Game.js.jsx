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
    showCards: function () {
        var cards = [];
        for (x = 1; x <= this.state.totalPlayers; x++) {
            cards.push(<Card key={x} player={this.state.players[x - 1]} isFlipped={this.isCardFlipped(x - 1)} />);
        }
        return cards;
    },
    dealCards: function () {
        // for now, deal the fibonacci, 9 cards.
        var cardValues = [0, 1, 2, 3, 5, 8, 13, 20, '?'];
        var cards = [];
        for (x = 0; x < cardValues.length; x++) {
            cards.push(<PokerCard key={x} value={cardValues[x]} onclick={this.setActive(x)}/>);
        }
        return cards;
    },
    setActiveCard: function (index) {
        var cardValues = [0, 1, 2, 3, 5, 8, 13, 20, '?'];
    },
    render: function() {
        return (
            <div>
                <div className="pull-right">
                    <FlipButton onclick={this.flipAllCards} />
                </div>
                <div className="players">{this.showCards()}</div>
                <PlayerCards />
                <div className="player-cards">{this.dealCards()}</div>
            </div>
        )
    }
});