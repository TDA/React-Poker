/**
 * Created by schandramouli on 3/18/17.
 */

var FlipButton = React.createClass({
    render: function () {
        return (
            <button type="button" className="btn btn-primary" onClick={this.props.onclick}>Flip Cards</button>
        );
    }
}); 