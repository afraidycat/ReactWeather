var React = require('react');

/*var WeatherMessage = React.createClass({
    render: function () {
        var { location, temp } = this.props;

        return (
            <div>
                <h3>The temp in {location} is {temp}</h3>
            </div>
        );
    }
});*/

var WeatherMessage = ({temp, location}) => {
    return (
        <div>
            <h3 className="text-center">The temp in {location} is {temp}</h3>
        </div>
    )
};

module.exports = WeatherMessage;