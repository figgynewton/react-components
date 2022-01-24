import React from 'react';

function Box2(props) {

    const [age, setAge] =React.useState(props.start);

    return (
        <div className="box2" onClick={()=> setAge(age+1)}>
            <p>{props.name}</p>
            <p>I am {props.age} {age} years old</p>
            <p>{props.color}</p>
        </div>

    );
}

export default Box2;