import { useRouteError} from "react-router";
import {Link} from "react-router-dom";
import React from 'react';

export default function Error () {
    const error = useRouteError();
    return (
        <div className="m-5">
            <h1 className="text-xl"> Error</h1>
            <p className="text-xs mb-2">Sorry, we couldn't find that page</p>
            <p className="mb-3">
                <code>
                    {error.status}: {error.statusText}
                </code>
            </p>
            <p>Please try searching again or
            <Link to='/'>  go back to the home page</Link>
            </p>
            <footer className="mt-4 text-xs"></footer>
        </div>
    );
}