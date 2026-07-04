import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className='max-w-lg mx-auto text-center'>
            <img src="https://docs.nexthink.com/platform/~gitbook/image?url=https%3A%2F%2F268444917-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FxJSUDk9NTtCHYPG5EWs3%252Fuploads%252Fgit-blob-62191db217cdfce80b1fdb9c26f97bf471e943ce%252Fappex-1643624040.png%3Falt%3Dmedia&width=768&dpr=3&quality=100&sign=9aad34e9&sv=2" alt="" />
            <Link to={'/'} className='btn btn-primary'>Go to Home</Link>
        </div>
    );
};

export default ErrorPage;