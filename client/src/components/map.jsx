import React from 'react';
import { GoogleMap, useJsApiLoader, InfoWindow, Marker } from '@react-google-maps/api';

let containerStyle = {
  width: '700px',
  height: '400px'
};

document.documentElement.style.setProperty('--map-width', containerStyle.width);
document.documentElement.style.setProperty('--map-height', containerStyle.height);


const center = {
  lat: 49.89586349462562,
  lng: 73.21122122881611
};

function MyComponent() {
  const [selectedPlace, setSelectedPlace] = React.useState(null);
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyBwN_cOYu6fxnuh56FE4NBR8VHTUVazZKM" 
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    setMap(map);
    map.setZoom(17); // Устанавливаем зум здесь
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, []);

  const markerClick = (place) => {
    setSelectedPlace(place);
  };

  return (
    <div className='mapStyle'>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={{ width: '100%', height: '100%' }}
          center={center}
          onLoad={onLoad}
          onUnmount={onUnmount}
        >
          {selectedPlace && (
            <InfoWindow
              position={{ lat: selectedPlace.lat, lng: selectedPlace.lng }}
              onCloseClick={() => setSelectedPlace(null)}
            >
              <div>
                <h3>{selectedPlace.name}</h3>
                <p>{selectedPlace.description}</p>
              </div>
            </InfoWindow>
          )}
          <Marker
            position={{ lat: 49.89586349462562, lng: 73.21122122881611 }}
            onClick={() => markerClick({ lat: 49.89586349462562, lng: 73.21122122881611, name: '"VitadentT"', description: 'Стомотология' })}
          />
        </GoogleMap>
      ) : <></>}
    </div>
  );
}

export default React.memo(MyComponent);