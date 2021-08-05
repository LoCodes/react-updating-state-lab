// Code YouTubeDebugger Component Here

import React, {Component} from 'react'


class YouTubeDebugger extends Component{
    constructor(){
        super()
        this.state = {
            errors: [],
            user: null,
            settings: {
              bitrate: 8,
              video: {
                resolution: '1080p'
              }
            
            }
        }

    }

    handleBit = () => { //event handler 
        // let newBit = this.settings.bitrate === 12
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12
            }

        })     
    }

    // handleResolution = () => {
    //     this.setState({
    //         settings: {
    //             ...this.state.settings,
    //             video: {
    //                 ...this.state.video,
    //                 resolution: '720p'
    //             }
                
                    
    //         }
    //     })
    // }

    // ----------------- OR -----------------------------

    handleResolution = () => {
        this.setState({
            settings: Object.assign({}, this.state.settings, {
                video: Object.assign({}, this.state.settings.video, {
                    resolution: '720p'
                })
                
            })
        })
    }
    
    
    render() {
        return(
            <div> 
                <button className="bitrate" onClick={this.handleBit}>Change bitrate</button>
                <button className='resolution' onClick={this.handleResolution}>Change Resolution </button>
            </div>
            
           
        )
    }
}

export default YouTubeDebugger