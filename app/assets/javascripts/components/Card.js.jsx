/**
 * Created by schandramouli on 3/15/17.
 */

var Card = React.createClass({
    getInitialState: function () {
        return {
            player: this.props.player,
            value: 0,
            isFlipped: this.props.isFlipped
        }
    },
    getDefaultProps: function () {
        return {
            player: undefined,
            value: 0
        }
    },
    componentWillReceiveProps: function(newProps) {
        // You don't have to do this check first, but it can help prevent an unneeded render
        if (newProps.isFlipped !== this.state.isFlipped) {
            this.setState({
                isFlipped: newProps.isFlipped
            });
        }
    },
    showCardFront: function () {
        return this.state.isFlipped? "": "upside";
    },
    showCardBack: function () {
        return this.state.isFlipped? "upside": "";
    },
    render: function() {
        return (
            <div className="poker-card">
                <div className={"card-face card-front " + this.showCardFront()}> {this.state.player.name} </div>
                <div className={"card-face card-back " + this.showCardBack()}> {this.state.value} </div>
            </div>
        )
    }
});