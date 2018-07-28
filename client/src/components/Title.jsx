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
                <Info />
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
          <a className="_1biqilc" href="/s/Makawao--HI?listing_types[]=60">
            <div className="_4efw5a"><span><span className="_1hh2h7tb"><span style={{color: '#734f21'}}>Entire cottage</span></span></span></div>
          </a>
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
            <div className="_2h22gn">
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
        <div className="_1hpgssa1">
            <div style={{marginBottom: 6}}>
              <div itemProp="name">
                <span dir="ltr">
                  <span className="_12ei9u44">
                    <h1 tabIndex={-1} className="_1xu9tpch">Adorable Garden Gingerbread House</h1>
                  </span>
                </span>
              </div>
            </div>
            <div style={{marginBottom: 16}}>
              <div data-location="Makawao">
                <a href="#neighborhood" className="_1biqilc">
                  <div className="_ncwphzu">Makawao</div>
                </a>
              </div>
            </div>
          </div>
        )
    }
}