import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L, { LatLngExpression } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import ReactDOMServer from 'react-dom/server';
import { LocationOn } from '@mui/icons-material';


const svgIcon = ReactDOMServer.renderToString(
    <LocationOn style={{ color: '#006f29', fontSize: '40px' }} />
  );

interface MapComponentProps {
    center: LatLngExpression;
    zoom?: number;
    styleClass?: string;
    showPopup?: boolean;
}

const MapComponent: React.FC<MapComponentProps> = ({ center, zoom = 15, styleClass = 'h-64 rounded-lg shadow-lg', showPopup = true }) => {
    const customIcon = L.icon({
        iconUrl: svgIcon,
        iconSize: [30, 30],
    });

    return (
        <div className={`relative overflow-hidden ${styleClass}`}>
            <MapContainer
                center={center}
                zoom={zoom}
                scrollWheelZoom={false}
                style={{ height: '100%', width: '100%' }}
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={center} icon={customIcon}>
                    {showPopup && <Popup>InmoTrust Oficina Central</Popup>}
                </Marker>
            </MapContainer>
        </div>
    );
};

export default MapComponent;