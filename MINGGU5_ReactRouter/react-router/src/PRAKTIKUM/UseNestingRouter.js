import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
} from "react-router-dom";

// Karena route adalah komponen regular react,
// sehingga dapat ditampilkan di mana saja dalam penempatannya,
// termasuk dalam child element.

// Ini akan membantu kita untuk memecah menjadi beberapa bundel
// karena pemisahan kode pada aplikasi ReactRouter sama dengan
// pemecahan kode pada aplikasi react lainnya.

export default function NestingExample() {
    return(
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/topics">Topics</Link>
                    </li>
                </ul>
                <hr />

                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/topics">
                        <Topics />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

function Home() {
    return (
        <div>
            <h2>Home</h2>
        </div>
    );
}

function Topics() {
// `path` untuk membuat jalur <Route> terhadap rute induk,
// sedangkan `url` untuk membuat link
    let { path, url } = useRouteMatch();
    return (
        <div>
            <h2>Topics</h2>
            <ul>
                <li>
                    <Link to={`${url}/Sate, Nasi goreng`}>Kuliner</Link>
                </li>
                <li>
                    <Link to={`${url}/Wisata alam, Museum`}>Travelling</Link>
                </li>
                <li>
                    <Link to={`${url}/Ibis, JW Marriot`}>Review Hotel</Link>
                </li>
            </ul>

            <Switch>
                <Route exact path={path}>
                    <h3>Please select a topic.</h3>
                </Route>
                <Route path={`${path}/:topicId`}>
                    <Topic />
                </Route>
            </Switch>
        </div>
    );
}

function Topic() {
    let { topicId } = useParams();

    return (
        <div>
            <h3>{topicId}</h3>
        </div>
    );
}