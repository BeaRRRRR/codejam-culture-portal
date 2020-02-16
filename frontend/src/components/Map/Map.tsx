import React from 'react';

const GOOGLE_API_KEY = 'AIzaSyDdVGeaV2xofDELkV8F_pIf2mz7m8h1-aY';

const Map = () => (
  <iframe
    width="600"
    height="450"
    src={`https://www.google.com/maps/embed/v1/place?key=${GOOGLE_API_KEY}&q=Space+Needle,Seattle+WA`} />
)

export default Map;
