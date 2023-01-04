import React, { createElement } from 'react'

const Jsx = () => {
    // Different from HTML(class->className, for->htmlFor due to reserved keyword in JS, camalCase naming convention)
    // With JSX(import React translate JSX code in React.createElement which uses react library)
    // return (
    //     <div>
    //         <h1>With and Without JSX</h1>
    //     </div>
    // )

    // Without JSX
    // React.createElement(type,{props},children)

    return React.createElement('div', {className : 'jsx'}, React.createElement('h1', null, 'With and without JSX')
    )
}

export default Jsx
