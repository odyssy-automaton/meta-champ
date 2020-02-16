import React from 'react';

const Explore = () => (
  <div className="View">
    <h1>Explore</h1>

    <div
      className="tableauPlaceholder"
      style={{ width: '1000px', height: '827px' }}
    >
      <object
        className="tableauViz"
        width="1000"
        height="827"
        style={{ display: 'none' }}
      >
        <param
          name="host_url"
          value="https%3A%2F%2Fcohealthviz.dphe.state.co.us%2F"
        />{' '}
        <param name="embed_code_version" value="3" />{' '}
        <param
          name="site_root"
          value="&#47;t&#47;OfficeofStrategyandPerformancePublic"
        />
        <param name="name" value="metaCHAMPcropstatus&#47;Dashboard1" />
        <param name="tabs" value="no" />
        <param name="toolbar" value="yes" />
        <param name="showAppBanner" value="false" />
      </object>
    </div>
  </div>
);

export default Explore;
