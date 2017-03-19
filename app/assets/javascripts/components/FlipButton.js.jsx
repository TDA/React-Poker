/**
 * Created by schandramouli on 3/18/17.
 */

var FlipButton = React.createClass({
    render: function () {
        return (
            <button type="button" onClick={this.props.onclick}>Flip Cards</button>
        );
    }
}); 