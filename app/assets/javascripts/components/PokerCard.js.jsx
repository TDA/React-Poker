/**
 * Created by schandramouli on 3/20/17.
 */

var PokerCard = React.createClass({
    isActiveCard: function () {
        return this.state.isActive? "active": "";
    },
    render: function () {
        return (
            <div className={"poker-card " + this.isActiveCard()}>
                <div>
                    <span> {this.props.value} </span>
                </div>
            </div>
        )
    }
}); 