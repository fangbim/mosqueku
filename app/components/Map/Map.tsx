// components/Map.js
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

const markerIcon = L.divIcon({
  html: `<svg width="42" height="49" viewBox="0 0 42 49" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M42 21C42 9.40202 32.598 0 21 0C9.40202 0 0 9.40202 0 21C0 23.8711 0.576173 26.6076 1.6192 29.1003C5.94533 40.912 21.1104 49 21.1104 49C21.1104 49 39.7389 39.0648 41.5928 25.1361C41.8599 23.7989 42 22.4158 42 21Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M38.6509 24.7849L38.6318 24.8814L38.619 24.9789C37.8426 30.8763 33.4427 36.2795 28.6948 40.4277C26.3812 42.4489 24.1126 44.0616 22.42 45.1691C21.9283 45.4908 21.4872 45.7686 21.1104 46C20.8599 45.8462 20.5811 45.672 20.2779 45.4779C18.8615 44.5714 16.9286 43.2433 14.8719 41.5641C10.6804 38.142 6.31788 33.5375 4.4362 28.3436L4.41287 28.2792L4.38668 28.2159C3.4944 26.0601 3 23.691 3 21.1975C3 11.1473 11.0589 3 21 3C30.9411 3 39 11.1473 39 21.1975C39 22.4283 38.8796 23.6276 38.6509 24.7849Z" fill="#F75751"/>
<path d="M29 21C29 16.5817 25.4183 13 21 13C16.5817 13 13 16.5817 13 21C13 25.4183 16.5817 29 21 29C25.4183 29 29 25.4183 29 21Z" fill="white"/>
</svg>
`,
  iconSize: [42, 49],
  iconAnchor: [49 / 2, 49],
  className: 'foo'
})

const Map = ({ latitude, longitude }) => {
  return (
    <MapContainer
      center={[latitude, longitude]}
      zoom={15}
      scrollWheelZoom={false}
      style={{ height: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="/:path*/{z}/{y}/{x}"
      />
      <Marker
        position={[latitude, longitude]}
        icon={markerIcon}
      ></Marker>
    </MapContainer>
  )
}

export default Map