import React, { useEffect, useState } from 'react';
import { getCurrentDateTime } from "../vars/time5";

const Index = () => {
  const [dateTime, setDateTime] = useState(getCurrentDateTime());
  useEffect(() => {
    setInterval(() => {
      setDateTime(getCurrentDateTime());
     
    }, 1000);
  }, []);

  

  return (
    <main>
      <div className="time_wrapper">
        <div className="column">
          <span id="minMax"></span>
        </div>
        <div className="column" id="pesoMedioId">
          <span id="pesoMedioKg5"></span>
        </div>
        <div className="column">
          <span id="spanDate">{dateTime.date}</span>
          <span className="float_right" id="spanTime">{dateTime.time}</span>
        </div>
      </div>
      <section>
        <div className="blueColor">
          <div id="ordenEnvaseL3"></div>
          <div className="showRitms">
            <div className="ritmColumn">
              <div id="divKg5">5 m: 0 kg/h</div>
              <div className="progress"><div className="progress-bar" id="card1dataProgress"></div></div>
            </div>
            <div className="ritmColumn">
              <div id="divKg25">25 m: 0 kg/h</div>
              <div className="progress"><div className="progress-bar" id="card2dataProgress"></div></div>
            </div>
            <div className="ritmColumn">
              <div id="divKg60">1 h: 0 kg/h</div>
              <div className="progress"><div className="progress-bar" id="card3dataProgress"></div></div>
            </div>
          </div>
        </div>
      </section>

      <div className="sectionGraf">
        <div>
          <canvas id="lineChart"></canvas>
        </div>
      </div>

      <section className="clear-both" id="ordenEnvaseL1"></section>

    </main>
  );
};

export default Index;
