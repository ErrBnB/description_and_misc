import React from 'react';

class Description extends React.Component {
    constructor () {
        super()
    }

    render () {
        return (
            <div>
                <Description_text />
                <Read_more />
                <Contact_host />
                <div style={{marginTop: 24, marginBottom: 24}}>
                    <div className="desc-underbar"></div>
                </div>
            </div>
        )
    }
}

class Description_text extends React.Component {
    constructor () {
        super()
    }

    render () {
        return (
            <div dir="ltr">
                <p className="desc-text-wrap"><span className="_fgdupie"><span>Romantic hideaway! This property has the lush beauty and privacy of Hana, without the drive! Only 15-20 minutes to the airport, 10 minutes to beaches, 2 minutes to restaurants and shops...on a private gated property with organic nursery. BEAUTIFUL!</span></span></p>
            </div>
        )
    }
}

class Read_more extends React.Component {
    constructor () {
        super()
    }

    render () {
        return (
        <div style={{marginTop: 16}}>
            <div>
              <div style={{marginTop: 8, marginBottom: 24}}>
                <div className="read-more-font">
                  <button type="button" className="desc-button" aria-expanded="false" aria-busy="false">
                    <div className="display-table">
                      <div className="read-more"><span>Read more about the space</span></div>
                      <div className="read-more">
                        <div style={{marginLeft: 8}}>
                          <div style={{transform: 'rotate(0deg)'}}>
                            <svg viewBox="0 0 18 18" role="presentation" aria-hidden="true" focusable="false" style={{height: 10, width: 10, display: 'block', fill: 'currentColor'}}>
                              <path d="m16.29 4.3a1 1 0 1 1 1.41 1.42l-8 8a1 1 0 0 1 -1.41 0l-8-8a1 1 0 1 1 1.41-1.42l7.29 7.29z" fillRule="evenodd" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )
    }
}

class Contact_host extends React.Component {
    constructor () {
        super()
    }

    render () {
        return (
        <div>
            <div style={{marginTop: 24}}><span><span><button type="button" className="desc-button" aria-busy="false"><span>Contact host</span></button></span></span></div>
        </div>
        )
    }
}

export default Description;