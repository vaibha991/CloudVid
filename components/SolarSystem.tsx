'use client'
import React from 'react'
import Image from 'next/image'
import './SolarSystem.css'

const SolarSystem = () => {
  return (
    <div className="solar-container">

      {/* Sun */}
      <div className="sun">
        <Image src="/images/sun.png" alt="Sun" width={100} height={100} />
      </div>

      {/* Mercury */}
      <div className="orbit mercury-orbit">
        <div className="planet mercury">
          <Image src="/images/mercury.png" alt="Mercury" width={40} height={40} />
        </div>
      </div>

      {/* Venus */}
      <div className="orbit venus-orbit">
        <div className="planet venus">
          <Image src="/images/venus.png" alt="Venus" width={50} height={50} />
        </div>
      </div>

      {/* Earth */}
      <div className="orbit earth-orbit">
        <div className="planet earth">
          <Image src="/images/earth.png" alt="Earth" width={50} height={50} />
        </div>
      </div>

      {/* Mars */}
      <div className="orbit mars-orbit">
        <div className="planet mars">
          <Image src="/images/mars.png" alt="Mars" width={45} height={45} />
        </div>
      </div>

      {/* Jupiter */}
      <div className="orbit jupiter-orbit">
        <div className="planet jupiter">
          <Image src="/images/jupiter.png" alt="Jupiter" width={90} height={90} />
        </div>
      </div>

      {/* Saturn */}
      <div className="orbit saturn-orbit">
        <div className="planet saturn">
          <Image src="/images/saturn.png" alt="Saturn" width={80} height={80} />
        </div>
      </div>

      {/* Uranus */}
      <div className="orbit uranus-orbit">
        <div className="planet uranus">
          <Image src="/images/uranus.png" alt="Uranus" width={70} height={70} />
        </div>
      </div>

      {/* Neptune */}
      <div className="orbit neptune-orbit">
        <div className="planet neptune">
          <Image src="/images/neptune.png" alt="Neptune" width={70} height={70} />
        </div>
      </div>

      {/* Pluto */}
      <div className="orbit pluto-orbit">
        <div className="planet pluto">
          <Image src="/images/pluto.png" alt="Pluto" width={30} height={30} />
        </div>
      </div>

    </div>
  )
}

export default SolarSystem
