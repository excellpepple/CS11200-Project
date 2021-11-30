import React, {useState, useEffect} from 'react';
import StatsView from "./overview/StatsView";
import DetailsView from "./overview/DetailsView";

export default function Overview() {
    const greeting = 'Hello Function Component!';

    return (
        <section id="overview" className="container-fluid">
          <div id="stats" className="container  justify-content-center h-100 text-center  w-50 position-absolute start-0 " >
            <StatsView/>
          </div>
          <div id="details" className="container-fluid justify-content-center h-100 text-center w-50 position-absolute mt-0 end-0">
                <DetailsView/>
          </div>
        </section>
    );
}
 
