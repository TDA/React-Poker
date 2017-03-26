/**
 * Created by schandramouli on 3/20/17.
 */

var PokerCard = React.createClass({
    // getInitialState: function () {
    //     return {
    //         isActive: this.props.isActive
    //     };
    // },
    // getDefaultProps: function () {
    //     return {
    //         isActive: false
    //     };
    // },
    // componentWillReceiveProps: function(newProps) {
    //     // You don't have to do this check first, but it can help prevent an unneeded render
    //     if (newProps.isActive !== this.state.isActive) {
    //         this.setState({
    //             isActive: newProps.isActive
    //         });
    //     }
    // },
    render: function () {
        return (
            <div className={"poker-card " + this.props.className} onMouseOver={this.props.onclick}>
                <div>
                    <span> {this.props.value} </span>
                </div>
            </div>
        )
    }
}); 