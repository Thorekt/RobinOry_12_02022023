import React from 'react';

import '../styles/Error.css';

/*
 * This is the error page.
 *
 * @returns {JSX.Element} The error page.
 */
function Error() {
  return (
    <div className='error'>
      <h1>Erreur</h1>
      <p>Contenu indisponnible actuellement</p>
    </div>
  );
}

export default Error;
