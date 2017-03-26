/**
 * Created by schandramouli on 3/22/17.
 */
function generateCards() {
    // TODO: model this as an object?
    // Second TODO: this should be configurable
    var cardValues = [0, 1, 2, 3, 5, 8, 13, 20, '?'];
    var cardStates = [];
    for (var i = 0; i < cardValues.length; i++) {
        cardStates[i] = "";
    }
    return {
        cardValues: cardValues,
        cardStates: cardStates
    }
}

var PlayerCards = React.createClass({
    getInitialState: function () {
        return generateCards();
    },
    getDefaultProps: function () {
        return generateCards();
    },
    setSelected: function (index) {
        this.setCardState(index, "selected-card");
    },
    setCardState: function (index, stateName) {
        cardStates = this.state.cardStates.slice();
        // reset all values
        for (var i = 0; i < cardStates.length; i++) {
            cardStates[i] = cardStates[i].replace(" " + stateName, "");
        }
        cardStates[index] += " " + stateName;
        this.setState({
            cardStates: cardStates
        })
    },
    dealCards: function () {
        // for now, deal the fibonacci, 9 cards.
        var cards = [];
        for (x = 0; x < this.state.cardValues.length; x++) {
            cards.push(<PokerCard key={x}
                                  value={this.state.cardValues[x]}
                                  onclick={this.setSelected.bind(this, x)}
                                  className={this.state.cardStates[x]} />);
        }
        return cards;
    },
    render: function () {
        return (
            <div className="player-cards">
                {this.dealCards()}
            </div>
        );
    }
}); 