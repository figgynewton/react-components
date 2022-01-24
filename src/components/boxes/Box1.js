import React from 'react';

function Box1(props) {

    const [name]  =React.useState(props.start);

    return (
        <div className="box1">
            {props.firstName}
            {props.lastName}

        </div>
    );
}

export default Box1;