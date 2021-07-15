import React from 'react';
import ButtonComponent from './Button';

const PropsComponent = () => {
    const onClick = () => alert('Alert!');
    const style = {
        backgroundColor: '#ff0000',
        width: '200px',
        height: '150px'
    };
    const className = 'upperCase';
    
    return (
        <ButtonComponent
            onClick={onClick}
            style={style}
            className={className}
        >
            Alert!
        </ButtonComponent>
    );
}

export default PropsComponent;