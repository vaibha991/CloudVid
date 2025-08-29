'use client'
import React from 'react'
import './SolarSystem.css'

const SolarSystem = () => {
  return (
    <div className="solar-container">

      {/* Sun */}
      <div className="sun">
        <img src="/images/sun.png" alt="Sun" />
      </div>

      {/* Mercury */}
      <div className="orbit mercury-orbit">
        <div className="planet mercury">
          <img src="/images/mercury.png" alt="Mercury" />
        </div>
      </div>

      {/* Venus */}
      <div className="orbit venus-orbit">
        <div className="planet venus">
          <img src="/images/venus.png" alt="Venus" />
        </div>
      </div>

      {/* Earth */}
      <div className="orbit earth-orbit">
        <div className="planet earth">
          <img src="/images/earth.png" alt="Earth" />
        </div>
      </div>

      {/* Mars */}
      <div className="orbit mars-orbit">
        <div className="planet mars">
          <img src="/images/mars.png" alt="Mars" />
        </div>
      </div>

      {/* Jupiter */}
      <div className="orbit jupiter-orbit">
        <div className="planet jupiter">
          <img src="/images/jupiter.png" alt="Jupiter" />
        </div>
      </div>

      {/* Saturn */}
      <div className="orbit saturn-orbit">
        <div className="planet saturn">
          <img src="/images/saturn.png" alt="Saturn" />
        </div>
      </div>

      {/* Uranus */}
      <div className="orbit uranus-orbit">
        <div className="planet uranus">
          <img src="/images/uranus.png" alt="Uranus" />
        </div>
      </div>

      {/* Neptune */}
      <div className="orbit neptune-orbit">
        <div className="planet neptune">
          <img src="/images/neptune.png" alt="Neptune" />
        </div>
      </div>

      {/* Pluto */}
      <div className="orbit pluto-orbit">
        <div className="planet pluto">
          <img src="/images/pluto.png" alt="Pluto" />
        </div>
      </div>

    </div>
  )
}

export default SolarSystem
