import React from 'react';
import iconsSprite from '../../assets/images/code-svg.svg'

type IconPropsType = {
    id: string
    width?: string
    height?: string
    viewBox?: string
    fill?:string
}

export const Icon = (props: IconPropsType) => {
    return (
        <svg width={props.width || '50'} height={props.height || '50'}
             viewBox={props.viewBox || '0 0 50 50'}>
            <use fill={props.fill || "#7572D5"}  xlinkHref={`${iconsSprite}#${props.id}`}/>
        </svg>
    );
};

