var React = require('react');
// var About = React.createClass({
//     render: function () {
//         return (
//             <h3>About Component</h3>
//         );
//     }
// });

var About = (props) => {
    return (
        <div>
            <h1 className="text-center page-title">About</h1>
            <p>This weather app was created to learn React. Contact me if you want some info on how I self taught this.</p>
            <p>Below are some of the tools I've used:</p>
            <ol>
                <li>
                    <a href='http://openweathermap.org/'>OpenWeatherMap API</a>
                </li>
                <li>
                    <a href='https://facebook.github.io/react/'>ReactJS</a>
                </li>
                <li>
                    <a href='http://foundation.zurb.com/sites.html'>Foundation for Sites</a>
                </li>
                <li>
                    <a href='https://github.com/afraidycat/ReactWeather'>Afraidycat Github Repo</a>
                </li>
            </ol>
        </div>
    );
}

module.exports = About;
