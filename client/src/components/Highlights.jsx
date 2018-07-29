import React from 'react';

class Highlights extends React.Component {
    constructor () {
        super()
    }

    render () {
        return (
            <div className="highlight-box">
                <div className="home-highlight">
                    <Highlight_title />
                    <Highlight_text1 />
                    <Highlight_text2 />
                    <Highlight_text3 />
                </div>
            </div>
        )
    }
}

class Highlight_title extends React.Component {
    constructor () {
        super()
    }

    render () {
        return (
            <small className="highlight-title"><span>HOME HIGHLIGHTS</span></small>
        )
    }
}

class Highlight_text1 extends React.Component {
    constructor () {
        super()
    }

    render () {
        return (
            <div style={{marginTop: 12}}>
                <div>
                <div style={{marginBottom: 8}}>
                    <span className="highlight-bold">Great check-in experience</span>
                    <span className="highlight-info">100% of recent guests gave this home’s check-in process a 5-star rating.</span>
                </div>
                <div className="helpful-box">
                    <div>
                    <button type="button" className="highlight-button" aria-busy="false">
                        <div className="emoji">
                        <div className="helpful-button-text">
                            <span>Helpful</span>
                        </div>
                        <div className="like" style={{marginLeft: 4}}>
                        <svg viewBox="0 0 16 16" role="presentation" aria-hidden="true" focusable="false" style={{height: '1em', width: '1em', display: 'block', fill: 'currentcolor'}}><path d="m8.37 1c-.34 0-.53.43-.64.79l-.04.17c-.17.74-.56 2.47-3.76 3.58-1.97.68-2.93 2.31-2.93 4.96 0 1.68.56 4.5 4.3 4.5h6.2c.3 0 1-.06 1-.63 0-.41-.26-.63-.5-.63a.5.5 0 1 1 0-1c .92 0 1-.31 1-.63 0-.52-.38-.61-.54-.63a.5.5 0 0 1 -.46-.52.5.5 0 0 1 .5-.48c1 0 1-.41 1-.63s0-.62-1-.62a.5.5 0 1 1 0-1c1 0 1-.47 1-.63 0-.58-.77-.63-1-.63h-4.5a1 1 0 0 1 -.83-1.56c.05-.07.16-.19.31-.35.34-.35.92-.93 1.21-1.58.24-.52.35-1.25.28-1.78 0-.01-.12-.74-.62-.74m3.15 15.04h-6.2c-3.32 0-5.3-2.06-5.3-5.5 0-3.09 1.21-5.08 3.61-5.91 2.67-.93 2.97-2.23 3.11-2.86.02-.08.04-.16.05-.22.37-1.31 1.16-1.51 1.6-1.51 1.02 0 1.52.96 1.61 1.61.09.71-.06 1.64-.37 2.32-.37.81-1.02 1.47-1.41 1.86-.09.1-.17.17-.2.21h4.5c1.2 0 2 .65 2 1.63 0 .46-.16.84-.45 1.11.39.37.45.86.45 1.14 0 .34-.09.98-.74 1.35.15.23.24.53.24.9 0 .41-.12 1.01-.74 1.36.15.26.24.56.24.89 0 .97-.8 1.63-2 1.63" /></svg>
                        </div>
                        <div className="helpful-dot" style={{marginLeft: 4, marginRight: 4}}>
                            <span aria-hidden="true"> · </span>
                        </div>
                        </div>
                    </button>
                    <button type="button" className="highlight-button" aria-busy="false"><span>Not helpful</span></button>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

class Highlight_text2 extends React.Component {
    constructor () {
        super()
    }

    render () {
        return (
            <div style={{marginTop: 12}}>
                    <div>
                    <div style={{marginBottom: 8}}>
                        <span className="highlight-bold">Great check-in experience</span>
                        <span className="highlight-info">100% of recent guests gave this home’s check-in process a 5-star rating.</span>
                    </div>
                    <div className="helpful-box">
                        <div>
                        <button type="button" className="highlight-button" aria-busy="false">
                            <div className="emoji">
                            <div className="helpful-button-text">
                                <span>Helpful</span>
                            </div>
                            <div className="like" style={{marginLeft: 4}}>
                            <svg viewBox="0 0 16 16" role="presentation" aria-hidden="true" focusable="false" style={{height: '1em', width: '1em', display: 'block', fill: 'currentcolor'}}><path d="m8.37 1c-.34 0-.53.43-.64.79l-.04.17c-.17.74-.56 2.47-3.76 3.58-1.97.68-2.93 2.31-2.93 4.96 0 1.68.56 4.5 4.3 4.5h6.2c.3 0 1-.06 1-.63 0-.41-.26-.63-.5-.63a.5.5 0 1 1 0-1c .92 0 1-.31 1-.63 0-.52-.38-.61-.54-.63a.5.5 0 0 1 -.46-.52.5.5 0 0 1 .5-.48c1 0 1-.41 1-.63s0-.62-1-.62a.5.5 0 1 1 0-1c1 0 1-.47 1-.63 0-.58-.77-.63-1-.63h-4.5a1 1 0 0 1 -.83-1.56c.05-.07.16-.19.31-.35.34-.35.92-.93 1.21-1.58.24-.52.35-1.25.28-1.78 0-.01-.12-.74-.62-.74m3.15 15.04h-6.2c-3.32 0-5.3-2.06-5.3-5.5 0-3.09 1.21-5.08 3.61-5.91 2.67-.93 2.97-2.23 3.11-2.86.02-.08.04-.16.05-.22.37-1.31 1.16-1.51 1.6-1.51 1.02 0 1.52.96 1.61 1.61.09.71-.06 1.64-.37 2.32-.37.81-1.02 1.47-1.41 1.86-.09.1-.17.17-.2.21h4.5c1.2 0 2 .65 2 1.63 0 .46-.16.84-.45 1.11.39.37.45.86.45 1.14 0 .34-.09.98-.74 1.35.15.23.24.53.24.9 0 .41-.12 1.01-.74 1.36.15.26.24.56.24.89 0 .97-.8 1.63-2 1.63" /></svg>
                            </div>
                            <div className="helpful-dot" style={{marginLeft: 4, marginRight: 4}}>
                                <span aria-hidden="true"> · </span>
                            </div>
                            </div>
                        </button>
                        <button type="button" className="highlight-button" aria-busy="false"><span>Not helpful</span></button>
                        </div>
                    </div>
                    </div>
                </div>
        )
    }
}

class Highlight_text3 extends React.Component {
    constructor () {
        super()
    }

    render () {
        return (
            <div style={{marginTop: 12}}>
                <div>
                <div style={{marginBottom: 8}}>
                    <span className="highlight-bold">Great check-in experience</span>
                    <span className="highlight-info">100% of recent guests gave this home’s check-in process a 5-star rating.</span>
                </div>
                <div className="helpful-box">
                    <div>
                    <button type="button" className="highlight-button" aria-busy="false">
                        <div className="emoji">
                        <div className="helpful-button-text">
                            <span>Helpful</span>
                        </div>
                        <div className="like" style={{marginLeft: 4}}>
                        <svg viewBox="0 0 16 16" role="presentation" aria-hidden="true" focusable="false" style={{height: '1em', width: '1em', display: 'block', fill: 'currentcolor'}}><path d="m8.37 1c-.34 0-.53.43-.64.79l-.04.17c-.17.74-.56 2.47-3.76 3.58-1.97.68-2.93 2.31-2.93 4.96 0 1.68.56 4.5 4.3 4.5h6.2c.3 0 1-.06 1-.63 0-.41-.26-.63-.5-.63a.5.5 0 1 1 0-1c .92 0 1-.31 1-.63 0-.52-.38-.61-.54-.63a.5.5 0 0 1 -.46-.52.5.5 0 0 1 .5-.48c1 0 1-.41 1-.63s0-.62-1-.62a.5.5 0 1 1 0-1c1 0 1-.47 1-.63 0-.58-.77-.63-1-.63h-4.5a1 1 0 0 1 -.83-1.56c.05-.07.16-.19.31-.35.34-.35.92-.93 1.21-1.58.24-.52.35-1.25.28-1.78 0-.01-.12-.74-.62-.74m3.15 15.04h-6.2c-3.32 0-5.3-2.06-5.3-5.5 0-3.09 1.21-5.08 3.61-5.91 2.67-.93 2.97-2.23 3.11-2.86.02-.08.04-.16.05-.22.37-1.31 1.16-1.51 1.6-1.51 1.02 0 1.52.96 1.61 1.61.09.71-.06 1.64-.37 2.32-.37.81-1.02 1.47-1.41 1.86-.09.1-.17.17-.2.21h4.5c1.2 0 2 .65 2 1.63 0 .46-.16.84-.45 1.11.39.37.45.86.45 1.14 0 .34-.09.98-.74 1.35.15.23.24.53.24.9 0 .41-.12 1.01-.74 1.36.15.26.24.56.24.89 0 .97-.8 1.63-2 1.63" /></svg>
                        </div>
                        <div className="helpful-dot" style={{marginLeft: 4, marginRight: 4}}>
                            <span aria-hidden="true"> · </span>
                        </div>
                        </div>
                    </button>
                    <button type="button" className="highlight-button" aria-busy="false"><span>Not helpful</span></button>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

export default Highlights;