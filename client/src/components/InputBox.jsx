import { memo, useState } from 'react';
import PropTypes from 'prop-types';

const InputBox = (props) => {
  const { name, id, type, value, placeholder, icon } = props;
  const [pwdVisible, setPwdVisible] = useState(false);
  return (
    <div className="relative w-[100%] mb-4">
      <input
        name={name}
        type={
          type === 'password'
            ? pwdVisible
              ? 'text'
              : 'password'
            : type
        }
        id={id}
        defaultValue={value}
        placeholder={placeholder}
        className="input-box"
      />
      <i className={`fi ${icon} input-icon`}></i>
      {type === 'password' ? (
        <i
          className={`input-icon ${!pwdVisible ? 'fi-rr-eye-crossed ' : 'fi-rr-eye'} left-[auto] right-4 cursor-pointer`}
          onClick={() => setPwdVisible((cur) => !cur)}
        ></i>
      ) : (
        ''
      )}
    </div>
  );
};

InputBox.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default memo(InputBox);
