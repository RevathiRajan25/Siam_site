import React from 'react';
import { Button } from 'react-bootstrap';

// style
import './style.scss';

const CButton = ({ children, onClick,className }) => {
    return(
        <Button onClick={onClick} className={className}>{children}</Button>
    )
}
export default CButton;