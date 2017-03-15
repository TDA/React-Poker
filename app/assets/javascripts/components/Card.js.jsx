/**
 * Created by schandramouli on 3/15/17.
 */

var Card = React.createClass({
    getInitialState: function () {
        return {
            playerId: this.props.playerId,
            value: 0
        }
    },
    getDefaultProps: function () {
        return {
            playerId: 0,
            value: 0
        }
    },
    render: function() {
        return (
            <div className="card">
                {this.state.playerId}<br />
                <h1>{this.state.value}</h1>
            </div>
        )
    }
});