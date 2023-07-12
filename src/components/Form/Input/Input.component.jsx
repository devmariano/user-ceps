import PropTypes from 'prop-types'
import * as Styled from './Input.style'
import { useState } from 'react';

import { MdVisibility, MdVisibilityOff} from 'react-icons/md'

export const InputComponent = ({label,type,id,placeholder}) => {
    const [showPassword, setshowPassword] = useState(false);

    const  handleShowPassword = () => {
        setshowPassword(!showPassword);
    }
    return(
        <Styled.InputGroup>
        <Styled.Label htmlFor={id}>{label}</Styled.Label>

        {type !== 'textarea' &&
        <Styled.InputContainer>
        <Styled.Input type={ showPassword ? 'text' : type } id={id}  placeholder={placeholder} className='Input' />
        {type == 'password' && 
        <Styled.Icon type='button' onClick={handleShowPassword}>
            {!showPassword 
            ? <MdVisibility/> 
            : <MdVisibilityOff/>
            }
        </Styled.Icon>
        }
        </Styled.InputContainer>
        }

        { type === 'textarea' &&
        <Styled.TextArea id={id}  placeholder={placeholder} className='TextArea'/>
        }
        </Styled.InputGroup>
    )
}

InputComponent.propTypes = {
label: PropTypes.string,
type: PropTypes.string,
id: PropTypes.string.isRequired,
placeholder: PropTypes.string,
}