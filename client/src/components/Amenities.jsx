import React from 'react';

class Amenity extends React.Component {
  constructor() {
    super();
  }
  render () {
    return (
      <section>
        <Amenity_title/>
        <Amenity_box />
        <Amenity_show_all/>
        <Amenity_end/>
      </section>
    )
  }
}

class Amenity_title extends React.Component {
  render () {
    return (
      <div style={{marginBottom: 16}}>
        <h2 className="amenity-title">
          <div className="amenity_title"><span>Amenities</span></div>
        </h2>
      </div>
    )
  }
}

class Amenity_box extends React.Component {
  render () {
    return (
      <div class="amenity-box">
        <Left_box/>
        <Right_box/>
      </div>
    )
  }
}

class Left_box extends React.Component {
  render () {
    return (
      <div class="amenity-box-side">
        <Amenity_L1/>
        <Amenity_L2/>
        <Amenity_L3/>
      </div>
    )
  }
}

class Right_box extends React.Component {
  render () {
    return (
      <div class="amenity-box-side">
        <Amenity_R1/>
        <Amenity_R2/>
        <Amenity_R3/>
      </div>
    )
  }
}

class Amenity_L1 extends React.Component {
  render () {
    return (
      <div style={{marginBottom: 16}}>
        <div className="amenity-table">
          <div className="amenity-table-display">
            <div style={{marginRight: 8}}>
              <svg viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false" style={{height: '1.2em', width: '1.2em', fill: 'currentcolor'}}>
                <path d="m10.5 0a .5.5 0 0 0 -.5.5v7a .5.5 0 0 1 -.49.5h-1.51v-7.5a.5.5 0 1 0 -1 0v7.5h-1.51a.5.5 0 0 1 -.49-.5v-7a .5.5 0 1 0 -1 0v7c0 .83.67 1.5 1.49 1.5h1.51v5c0 .03.01.06.02.09a1.49 1.49 0 0 0 -1.02 1.41v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.66-.43-1.21-1.02-1.41.01-.03.02-.06.02-.09v-5h1.51a1.5 1.5 0 0 0 1.49-1.5v-7a .5.5 0 0 0 -.5-.5zm-2.5 15.5v7a .5.5 0 0 1 -.5.5.5.5 0 0 1 -.5-.5v-7c0-.28.22-.5.5-.5s.5.22.5.5zm11.5-15.5h-2c-1.4 0-2.5 1.07-2.5 2.5v7c0 1.43 1.1 2.5 2.5 2.5h1.5v2.09a1.49 1.49 0 0 0 -.5-.09c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-22.5zm-2 11c-.86 0-1.5-.63-1.5-1.5v-7c0-.87.65-1.5 1.5-1.5h1.5v10zm1.5 11.5a.5.5 0 0 1 -.5.5.5.5 0 0 1 -.5-.5v-7c0-.28.22-.5.5-.5s.5.22.5.5z" fillRule="evenodd" />
              </svg>
            </div>
          </div>
          <div className="amenity-table-display">
            <div className="amenity-text">Kitchen</div>
          </div>
        </div>
      </div>
    )
  }
}

class Amenity_L2 extends React.Component {
  render () {
    return (
      <div style={{marginBottom: 16}}>
        <div className="amenity-table">
          <div className="amenity-table-display">
            <div style={{marginRight: 8}}>
              <svg viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false" style={{height: '1.2em', width: '1.2em', fill: 'currentcolor'}}>
                <path d="m12 15a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0 5a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm5.92-5.78a.5.5 0 1 1 -.84.55c-1.19-1.81-3.07-2.77-5.08-2.77s-3.89.96-5.08 2.78a.5.5 0 0 1 -.84-.55c1.38-2.1 3.58-3.23 5.92-3.23s4.54 1.13 5.92 3.23zm2.98-3.03a.5.5 0 1 1 -.79.61c-1.66-2.14-5.22-3.8-8.11-3.8-2.83 0-6.26 1.62-8.12 3.82a.5.5 0 0 1 -.76-.65c2.05-2.42 5.75-4.17 8.88-4.17 3.19 0 7.05 1.8 8.9 4.19zm2.95-2.33a.5.5 0 0 1 -.71-.02c-2.94-3.07-6.71-4.84-11.14-4.84s-8.2 1.77-11.14 4.85a.5.5 0 0 1 -.72-.69c3.12-3.27 7.14-5.16 11.86-5.16s8.74 1.89 11.86 5.16a.5.5 0 0 1 -.02.71z" fillRule="evenodd" />
              </svg>
            </div>
          </div>
          <div className="amenity-table-display">
            <div className="amenity-text">Wifi</div>
          </div>
        </div>
      </div>
    )
  }
}

class Amenity_L3 extends React.Component {
  render () {
    return (
      <div style={{marginBottom: 16}}>
        <div className="amenity-table">
          <div className="amenity-table-display">
            <div style={{marginRight: 8}}>
              <svg viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false" style={{height: '1.2em', width: '1.2em', fill: 'currentcolor'}}>
                <path d="m5 3.5a1.5 1.5 0 1 0 -3 0 1.5 1.5 0 0 0 3 0zm-1.5.5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm4 1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm0-2a .5.5 0 1 1 0 1 .5.5 0 0 1 0-1zm4.5 3c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8zm0 15c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zm9.5-21h-19a2.51 2.51 0 0 0 -2.5 2.5v19c0 1.38 1.12 2.5 2.5 2.5h19c1.38 0 2.5-1.12 2.5-2.5v-19c0-1.38-1.12-2.5-2.5-2.5zm1.5 21.5c0 .83-.68 1.5-1.5 1.5h-19c-.83 0-1.5-.68-1.5-1.5v-19c0-.83.68-1.5 1.5-1.5h19c .83 0 1.5.68 1.5 1.5zm-6.17-6.12a.5.5 0 0 1 .04.71 2.49 2.49 0 0 1 -.63.48c-1.15.65-2.67.65-4.49-.38-1.52-.85-2.66-.85-3.51-.38a1.57 1.57 0 0 0 -.37.27.5.5 0 1 1 -.75-.66 2.49 2.49 0 0 1 .63-.48c1.15-.65 2.67-.65 4.49.38 1.52.85 2.66.85 3.51.38a1.57 1.57 0 0 0 .37-.27.5.5 0 0 1 .71-.04zm0-3.5a.5.5 0 0 1 .04.71 2.49 2.49 0 0 1 -.63.48c-1.15.65-2.67.65-4.49-.38-1.52-.85-2.66-.85-3.51-.38a1.57 1.57 0 0 0 -.37.27.5.5 0 1 1 -.75-.66 2.49 2.49 0 0 1 .63-.48c1.15-.65 2.67-.65 4.49.38 1.52.85 2.66.85 3.51.38a1.57 1.57 0 0 0 .37-.27.5.5 0 0 1 .71-.04z" fillRule="evenodd" />
              </svg>
            </div>
          </div>
          <div className="amenity-table-display">
            <div className="amenity-text">Dryer</div>
          </div>
        </div>
      </div>
    )
  }
}

class Amenity_R1 extends React.Component {
  render () {
    return (
      <div style={{marginBottom: 16}}>
        <div className="amenity-table">
          <div className="amenity-table-display">
            <div style={{marginRight: 8}}>
              <svg viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false" style={{height: '1.2em', width: '1.2em', fill: 'currentcolor'}}>
                <path d="m6.5 5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zm0 4a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm10.15-4.09a125.01 125.01 0 0 0 -1.43-.45 217.8 217.8 0 0 0 -3.98-1.21c-2.68-.78-4.51-1.23-5.24-1.25-3.43.04-6.01 2.28-6.01 5.5 0 2 .98 3.62 2.53 4.57 0 .02 0 .04.01.06.19.68.31 1.6.39 2.7a40.42 40.42 0 0 1 .05 4.17 2.01 2.01 0 0 0 2.03 2h2.03c1.25 0 1.97-.73 1.97-1.98 0-.07 0-.14 0-.31-.03-1.86.16-3.27.89-4.81a7.75 7.75 0 0 1 1-1.59.5.5 0 0 0 .09-.17 71.83 71.83 0 0 0 1.53-.4 97.27 97.27 0 0 0 4.15-1.24.5.5 0 0 0 .34-.48v-4.65a.5.5 0 0 0 -.35-.48zm-7.67 8.57c-.81 1.71-1.01 3.26-.98 5.25v.29c0 .7-.28.98-.97.98h-2.03c-.6 0-1.03-.48-1.03-.98a41.35 41.35 0 0 0 -.05-4.26 18.74 18.74 0 0 0 -.26-2.15c.71.25 1.5.39 2.33.39.85 0 2.05-.19 3.53-.51-.21.32-.39.65-.55.99zm7.02-6.98v3.17a96.43 96.43 0 0 1 -3.76 1.11 69.77 69.77 0 0 1 -1.72.45c-1.98.49-3.55.76-4.52.76-2.89 0-5-1.85-5-4.5 0-2.63 2.11-4.47 5.01-4.5.59.01 2.41.46 4.97 1.21a216.71 216.71 0 0 1 4.99 1.53l.04.01v.75zm7.92 3.1a1.91 1.91 0 0 1 -.42.46 1.97 1.97 0 0 1 -1.25.44c-.47 0-.8-.15-1.51-.57-.54-.33-.77-.43-.99-.43-.3 0-.55.05-.75.13a.91.91 0 0 0 -.19.09.5.5 0 0 1 -.62-.78c.09-.07.24-.16.44-.24a3.01 3.01 0 0 1 1.12-.2c.47 0 .8.15 1.51.57.54.33.77.43.99.43a.98.98 0 0 0 .63-.22.98.98 0 0 0 .2-.21.5.5 0 0 1 .85.53zm-5.81-2.95a.5.5 0 0 1 .08-.7c.09-.07.24-.16.44-.24a3.01 3.01 0 0 1 1.12-.2c.47 0 .8.15 1.51.57.54.33.77.43.99.43a.98.98 0 0 0 .63-.22.98.98 0 0 0 .2-.21.5.5 0 0 1 .85.53 1.91 1.91 0 0 1 -.42.46 1.97 1.97 0 0 1 -1.25.44c-.47 0-.8-.15-1.51-.57-.54-.33-.77-.43-.99-.43-.3 0-.55.05-.75.13a.91.91 0 0 0 -.19.09.5.5 0 0 1 -.7-.08z" fillRule="evenodd" />
              </svg>
            </div>
          </div>
          <div className="amenity-table-display">
            <div className="amenity-text">Hair dryer</div>
          </div>
        </div>
      </div>
    )
  }
}

class Amenity_R2 extends React.Component {
  render () {
    return (
      <div style={{marginBottom: 16}}>
        <div className="amenity-table">
          <div className="amenity-table-display">
            <div style={{marginRight: 8}}>
              <svg viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false" style={{height: '1.2em', width: '1.2em', fill: 'currentcolor'}}>
                <path d="m5 3.5a1.5 1.5 0 1 0 -3 0 1.5 1.5 0 0 0 3 0zm-1.5.5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm4 1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm0-2a .5.5 0 1 1 0 1 .5.5 0 0 1 0-1zm4.5 3c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8zm0 15c-3.77 0-6.84-2.99-6.99-6.73.35-.23.84-.57.85-.57 1.64-1.05 3.31-1.06 5.85.71 2.88 2.01 4.99 1.99 6.96.73l.25-.17c-.47 3.4-3.39 6.03-6.92 6.03zm6.13-6.7c-1.64 1.05-3.31 1.06-5.85-.71-2.88-2.01-4.99-1.99-6.96-.73l-.25.17c.48-3.4 3.4-6.03 6.93-6.03 3.77 0 6.84 2.99 6.99 6.73-.35.23-.84.57-.85.57zm3.37-14.3h-19a2.51 2.51 0 0 0 -2.5 2.5v19c0 1.38 1.12 2.5 2.5 2.5h19c1.38 0 2.5-1.12 2.5-2.5v-19c0-1.37-1.12-2.5-2.5-2.5zm1.5 21.5c0 .83-.68 1.5-1.5 1.5h-19c-.83 0-1.5-.68-1.5-1.5v-19c0-.82.68-1.5 1.5-1.5h19c .83 0 1.5.68 1.5 1.5z" fillRule="evenodd" />
              </svg>
            </div>
          </div>
          <div className="amenity-table-display">
            <div className="amenity-text">Washer</div>
          </div>
        </div>
      </div>
    )
  }
}

class Amenity_R3 extends React.Component {
  render () {
    return (
      <div style={{marginBottom: 16}}>
        <div className="amenity-table">
          <div className="amenity-table-display">
            <div style={{marginRight: 8}}>
              <svg viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false" style={{height: '1.2em', width: '1.2em', fill: 'currentcolor'}}>
                <path d="m5.5 5h-.5v8h14v-8zm12.5 7h-12v-6h12zm5.9 6.69-.04-.05-.11-.14-.4-.51-1.2-1.55-1.15-1.47v-10.97a1 1 0 0 0 -.99-1h-16.02c-.55 0-.99.45-.99 1v10.95l-.19.24c-.6.76-1.2 1.53-1.76 2.26l-.16.21c-.29.37-.55.72-.79 1.04l-.1.13v.17c0 1.35.65 2 2 2h20c1.17 0 2-.71 2-2v-.17l-.11-.14zm-19.9-14.69h16.01c-.01 0-.01 7.92-.01 10h-16zm18 16h-20c-.73 0-.96-.2-.99-.85.21-.28.43-.56.66-.87l.16-.21a229.93 229.93 0 0 1 2.33-2.98l.07-.09h15.51l1.6 2.06 1.2 1.55a4708182.18 4708182.18 0 0 1 .42.54c-.05.59-.38.86-.98.86zm-7.52-3.62a.5.5 0 0 0 -.48-.38h-4a .5.5 0 0 0 -.49.38l-.5 2a .5.5 0 0 0 .49.62h5a .5.5 0 0 0 .49-.62l-.5-2zm-4.34 1.62.25-1h3.22l.25 1z" fillRule="evenodd" />
              </svg>
            </div>
          </div>
          <div className="amenity-table-display">
            <div className="amenity-text">Laptop friendly workspace</div>
          </div>
        </div>
      </div>
    )
  }
}

class Amenity_show_all extends React.Component {
  render () {
    return (
      <div style={{marginTop: 8}}>
        <div className="amenity-show-all"><button type="button" className="amenity-show-button" aria-busy="false"><span>Show all 28 amenities</span></button></div>
      </div>
    )
  }
}

class Amenity_end extends React.Component {
  render () {
    return (
      <div style={{marginTop: 24, marginBottom: 24}}>
        <div className="_76irmj" />
      </div>
    )
  }
}

export default Amenity;