/**
 * Created by schandramouli on 3/15/17.
 */

var Game = React.createClass({
    getInitialState: function () {
        return {
            title: this.props.data.title,
            totalPlayers: this.props.data.totalPlayers
        }
    },
    getDefaultProps: function () {
        return {
            title: "",
            totalPlayers: 0
        }
    },
    dealCards: function () {
        var cards = [];
        for (x = 1; x <= this.state.totalPlayers; x++) {
            cards.push(<Card playerId={x} key={x} />);
        }
        return cards;
    },
    render: function() {
        return (
            <div>
                {this.dealCards()}
            </div>
        )
    }
});