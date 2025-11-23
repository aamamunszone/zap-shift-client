import React, { useRef } from 'react';
import Container from '../../components/common/Container/Container';
import 'leaflet/dist/leaflet.css';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { useLoaderData } from 'react-router';
import { FiSearch } from 'react-icons/fi';
import toast from 'react-hot-toast';

const Coverage = () => {
  const position = [23.8103, 90.4125];
  const wareHouses = useLoaderData();
  const mapRef = useRef(null);

  const handleSearch = (e) => {
    e.preventDefault();
    const location = e.target.location.value;
    const district = wareHouses.find((wareHouse) =>
      wareHouse.district.toLowerCase().includes(location.toLowerCase())
    );
    if (district) {
      const coord = [district.latitude, district.longitude];
      mapRef.current.flyTo(coord, 13);
    } else {
      toast.error('District not found. Please enter a valid name.');
    }
  };

  return (
    <div className=" mb-6 relative z-10">
      <title>ZapShift | Coverage</title>

      {/* Coverage Section */}
      <section>
        <Container className="rounded-xl bg-base-100 px-24 py-20">
          <div>
            <h2 className="text-secondary text-4xl font-extrabold tracking-wide mb-8">
              We are available in 64 districts
            </h2>

            {/* Search Form */}
            <form
              onSubmit={handleSearch}
              className="flex items-center w-full max-w-md bg-white shadow-md rounded-full overflow-hidden border border-gray-200"
            >
              {/* Search Icon */}
              <div className="px-4 text-gray-500">
                <FiSearch size={20} />
              </div>

              {/* Input Field */}
              <input
                type="text"
                name="location"
                placeholder="Search location..."
                required
                className="flex-1 py-3 outline-none text-gray-700 placeholder-gray-400"
              />

              {/* Button */}
              <button
                type="search"
                className="px-6 py-3 bg-primary font-semibold hover:bg-primary-focus transition"
              >
                Search
              </button>
            </form>
          </div>

          {/* Coverage Map */}
          <div className="rounded-xl overflow-hidden w-full h-[60vh] mt-14">
            <MapContainer
              center={position}
              zoom={9}
              scrollWheelZoom={false}
              className="w-full h-full"
              ref={mapRef}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />

              {wareHouses.map((wareHouse, index) => (
                <Marker
                  key={index}
                  position={[wareHouse.latitude, wareHouse.longitude]}
                >
                  <Popup>
                    <strong>District: {wareHouse.district}</strong> <br />
                    <b>Service Area: {wareHouse.covered_area.join(', ')}</b>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Coverage;
