/**
 * Created by schandramouli on 3/20/17.
 */

var PokerCard = React.createClass({
    render: function () {
        return (
            <div className="poker-card">
                <div>
                    <span> {this.props.value} </span>
                </div>
            </div>
        )
    }
}); 