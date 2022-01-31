import GoogleMapReact from 'google-map-react';
import { useState } from 'react';
import { RiMapPin2Fill } from 'react-icons/ri';

function Marker() {
  return <RiMapPin2Fill className="text-red-500 -mb-4 h-8 w-8 absolute -translate-x-1/2 -translate-y-full" />;
}

function GoogleMap({ className, onChange, defaultValue = {} }) {
  const [currentLocation, setCurrentLocation] = useState(defaultValue);

  const defaultProps = {
    center: {
      lat: 41.85,
      lng: -87.65,
    },
    zoom: 3,
  };

  const handleChange = (newLocation) => {
    setCurrentLocation(newLocation);
    if (onChange) onChange(newLocation);
  };

  return (
    <div className={className}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_KEY }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        onClick={handleChange}
      >
        {currentLocation?.lat ? (
          <Marker
            lat={currentLocation.lat}
            lng={currentLocation.lng}
          />
        ) : null }
      </GoogleMapReact>
    </div>
  );
}

export default GoogleMap;
