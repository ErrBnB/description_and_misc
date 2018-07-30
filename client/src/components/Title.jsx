import React from 'react';

class Title extends React.Component {
    constructor (props) {
        super(props);
        console.log("@TITLE", props);
    }
    render() {
        return (
        <div id="summary">
            <div style={{marginTop: 24, marginBottom: 24}}>
                <House_type />
                <Main_title data={this.props.data} />
                <Info_bar data={this.props.data}/>
            </div>
         </div>
        )
    }
}

class House_type extends React.Component {
    constructor() {
        super();
    }
    render () {
        return (
            <div className="type-box"><span><span className="type-text"><span style={{color: '#734f21'}}>Entire cottage</span></span></span></div>
        )
    }
}

class Main_title extends React.Component {
    constructor (props) {
        super(props);
        console.log('@MAINTITLE', props);
    }
    render () {
        return (
          <div>
            <div className="main-title">
                <Title_Box title={this.props.data[0].title} />
                <Owner_Box owner={this.props.data[0].owner} />
            </div>
          </div>
        )
    }
}

class Title_Box extends React.Component {
    constructor (props) {
        super(props);
        console.log('@TitleBox', props);
    }
    render () {
        return (
        <div className="title-box">
            <div style={{marginBottom: 6}}>
              <div itemProp="name">
                <span dir="ltr">
                  <span className="main-title-text">
                    <h1 tabIndex={-1} className="main-title-bold">{this.props.title}</h1>
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
    constructor (props) {
        super(props);
        console.log('@OwnerBox', props);
    }

    render () {
        return (
            <div className="owner-box">
                <div style={{marginTop: 12}}>
                <div className="text-center text-muted">
                    <div style={{marginBottom: 6}}>
                    <div className="owner-image-box" style={{height: 64, width: 64, display: 'block'}}>
                        <img className="owner-image" src="https://static.fjcdn.com/pictures/Pikachu_9df2f5_1773586.jpg" height={64} width={64} alt="picachu User Profile" title="picachu User Profile" />
                    </div>
                    </div>
                    <div className="owner-name">{this.props.owner + " The Pikachu"}</div>
                </div>
                </div>
            </div>
        )
        
    }
}

class Info_bar extends React.Component {
    constructor (props) {
        super(props);
        console.log("@INFO-BAR", props);
    }
    render () {
        var numOfBeds = this.props.data[0].beds;
        return (
            <div>
                <Info info={this.props.data[0].guests + "guests"} emoji={"󰄂"} />
                <Info info={numOfBeds === 0? "Studio" : numOfBeds + " bedroom"} emoji={"󰄄"} />
                <Info info={this.props.data[0].beds + " bed"} emoji={"󰄃"} />
                <Info info={this.props.data[0].bath + " bath"} emoji={"󰄁"} />
            </div>
        )
    }
}

class Info extends React.Component {
    constructor (props) {
        super(props)
    }
    render () {
        return (
            <div className="info" style={{marginRight: 16}}>
                <div className="info-middle">
                <div className="info-text-box">
                    <div style={{marginRight: 8}}><span className="info-svg"><span className="airmoji" aria-hidden="true">{this.props.emoji}</span></span></div>
                </div>
                <div className="info-text-box"><span className="info-text">{this.props.info}</span></div>
                </div>
            </div>
        )
    }
} 

export default Title;