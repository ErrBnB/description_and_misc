import React from 'react';

class Amenity_detail extends React.Component {
    constructor (props) {
        super(props);
    }

    render () {
        return (
            <div className="popup-bachsheet">
                <div className="backsheet-format">
                    <div className="backsheet-margin">
                        <div className="amebox-format">
                            <Amenity_box />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

class Amenity_box extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div>
                <section>
                <Amebox_head />
                <header>
                    <div className="amebox-titlebox">
                    <div className="amebox-title">
                        <h1 id="dls-modal__AmenitiesModal" tabIndex={-1} className="amebox-category"><span>Amenities</span></h1>
                    </div>
                    </div>
                </header>
                <Amebox_contents />
                </section>
            </div>
        )
    }
}

class Amebox_head extends React.Component {
    render () {
        return (
            <div className="amebox-content-format">
                <div className="amebox-head">
                <button type="button" className="amebox-close" aria-busy="false" style={{padding: 0, margin: 0}}>
                    <svg viewBox="0 0 24 24" role="img" aria-label="Close" focusable="false" style={{height: 16, width: 16, display: 'block', fill: 'rgb(118, 118, 118)'}}>
                    <path d="m23.25 24c-.19 0-.38-.07-.53-.22l-10.72-10.72-10.72 10.72c-.29.29-.77.29-1.06 0s-.29-.77 0-1.06l10.72-10.72-10.72-10.72c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0l10.72 10.72 10.72-10.72c.29-.29.77-.29 1.06 0s .29.77 0 1.06l-10.72 10.72 10.72 10.72c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22" fillRule="evenodd" />
                    </svg>
                </button>
                </div>
            </div>
        )
    }
}

class Amebox_contents extends React.Component {
    constructor (props) {
        super(props);
    }
    render () {
        return (
            <section>
                <Amebox_category />
            </section>
        )
    }
}

class Amebox_category extends React.Component {
    constructor (props) {
        super(props);
    }
    render () {
        return (
            <div style={{marginTop: 0, marginBottom: 16}}>
                <section>
                <h2 className="amebox-category">
                    <div className="amebox-category-text">Basic</div>
                </h2>
                <div style={{marginTop: 24}}>
                    <Amebox_amenity />
                </div>
                </section>
            </div>
        )
    }
}

class Amebox_amenity extends React.Component {
    constructor (props) {
        super(props);
    }
    render () {
        return (
            <div>
            <div className="amebox-textbox">
              <div className="amebox-text-format">
                <div className="amebox-amenity">Wifi</div>
                <div style={{marginTop: 8}}>
                  <div className="amebox-amenity-desc">Continuous access in the listing</div>
                </div>
              </div>
            </div>
            <div style={{marginTop: 24, marginBottom: 24}}>
              <div className="amebox-amenity-boarder" />
            </div>
          </div>
        )
    }
}

export default Amenity_detail;