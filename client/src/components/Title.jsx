import React from 'react';

class Title extends React.Component {
    constructor () {
        super()
    }
    render() {
        return (
        <div id="summary">
            <div style={{marginTop: 24, marginBottom: 24}}>
                <House_type />
                <Main_title />
                <Info_bar />
            </div>
         </div>
        )
    }
}

class House_type extends React.Component {
    constructor() {
        super()
    }
    render () {
        return (
            <div className="type-box"><span><span className="type-text"><span style={{color: '#734f21'}}>Entire cottage</span></span></span></div>
        )
    }
}

class Main_title extends React.Component {
    constructor () {
        super()
    }
    render () {
        return (
          <div>
            <div className="main-title">
                <Title_Box />
                <Owner_Box />
            </div>
          </div>
        )
    }
}

class Title_Box extends React.Component {
    constructor () {
        super()
    }
    render () {
        return (
        <div className="title-box">
            <div style={{marginBottom: 6}}>
              <div itemProp="name">
                <span dir="ltr">
                  <span className="main-title-text">
                    <h1 tabIndex={-1} className="main-title-bold">Adorable Garden Gingerbread House</h1>
                  </span>
                </span>
              </div>
            </div>
            <div style={{marginBottom: 16}}>
                  <div className="location">Makawao</div>
            </div>
          </div>
        )
    }
}

class Owner_Box extends React.Component {
    constructor () {
        super()
    }

    render () {
        return (
            <div className="owner-box">
                <div style={{marginTop: 12}}>
                <div className="text-center text-muted">
                    <div style={{marginBottom: 6}}>
                    <div className="owner-image-box" style={{height: 64, width: 64, display: 'block'}}>
                        <img className="owner-image" src="https://a0.muscache.com/im/users/3280543/profile_pic/1378257191/original.jpg?aki_policy=profile_x_medium" height={64} width={64} alt="Eve User Profile" title="Eve User Profile" />
                    </div>
                    </div>
                    <div className="owner-name">Eve</div>
                </div>
                </div>
            </div>
        )
        
    }
}

class Info_bar extends React.Component {
    constructor () {
        super()
    }
    render () {
        return (
            <div>
                <Info1 />
                <Info2 />
                <Info3 />
                <Info4 />
            </div>
        )
    }
}

class Info1 extends React.Component {
    constructor () {
        super()
    }
    render () {
        return (
            <div className="info" style={{marginRight: 16}}>
                <div className="info-middle">
                <div className="info-text-box">
                    <div style={{marginRight: 8}}><span className="info-svg"><span className="airmoji" aria-hidden="true">󰄂</span></span></div>
                </div>
                <div className="info-text-box"><span className="info-text">2 guests</span></div>
                </div>
            </div>
        )
    }
}

class Info2 extends React.Component {
    constructor () {
        super()
    }
    render () {
        return (
            <div className="info" style={{marginRight: 16}}>
                <div className="info-middle">
                <div className="info-text-box">
                    <div style={{marginRight: 8}}><span className="info-svg"><span className="airmoji" aria-hidden="true">󰄄</span></span></div>
                </div>
                <div className="info-text-box"><span className="info-text">Studio</span></div>
                </div>
            </div>
        )
    }
}

class Info3 extends React.Component {
    constructor () {
        super()
    }
    render () {
        return (
            <div className="info" style={{marginRight: 16}}>
                <div className="info-middle">
                <div className="info-text-box">
                    <div style={{marginRight: 8}}><span className="info-svg"><span className="airmoji" aria-hidden="true">󰄃</span></span></div>
                </div>
                <div className="info-text-box"><span className="info-text">1 bed</span></div>
                </div>
            </div>
        )
    }
}

class Info4 extends React.Component {
    constructor () {
        super()
    }
    render () {
        return (
            <div className="info" style={{marginRight: 0}}>
                <div className="info-middle">
                <div className="info-text-box">
                    <div style={{marginRight: 8}}><span className="info-svg"><span className="airmoji" aria-hidden="true">󰄁</span></span></div>
                </div>
                <div className="info-text-box"><span className="info-text">1 bath</span></div>
                </div>
            </div>
        )
    }
}

export default Title;