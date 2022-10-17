import { CSSProperties, useCallback, useContext } from 'react';
import { ProductContext } from './ProductCard';

import styles from '../styles/styles.module.css';

export interface Props {
    className?: string;
    style?: CSSProperties;
}

export const ProductButtons = ({ className, style }: Props) => {

    // TODO: maxCount
    const { increaseBy, counter, maxCount } = useContext( ProductContext )

    const isMaxCountReaced = useCallback(
      () => !!maxCount && counter === maxCount,
      [counter, maxCount],
    );
    
    // TODO: isMaxReached = useCallback, dependencias [ counter, maxCount ] 
    // TRUE si el counter == maxCount
    // False si no lo es

    return (
        <div 
            className={ `${styles.buttonsContainer} ${ className }` }
            style={ style }
        >
            <button 
                className={ styles.buttonMinus }
                onClick={ () => increaseBy( -1 ) }> - </button>
                
            <div className={ styles.countLabel }> { counter } </div>

            <button
                className={ `${styles.buttonAdd} ${ isMaxCountReaced() && styles.disabled }` }
                onClick={ () => increaseBy( +1 ) }
            > + </button>
        </div>
    )
}