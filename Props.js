// import React from 'react'

// const Props = (props) => {
//     return (
//         <div>
//             <h1>Hey {props.firstName} {props.lastName}</h1>
//             {props.children}
//         </div>
//     )
// }

import React, { Component } from 'react'
class Props extends Component{
    render(){
        return (
            <div>
                <h1>Hey {this.props.firstName} {this.props.lastName}</h1>
                {this.props.children}
            </div>
        )
    }
}

export default Props
