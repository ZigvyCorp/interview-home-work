import React from 'react';

const ColorfulLabel = ({ colorText, colorCode, bgColorCode }) => {
  return (
    <span
      className='p-1 m-1 rounded'
      style={{
        border: `1px solid ${colorCode}`,
        color: `${colorCode}`,
        backgroundColor: `${bgColorCode}`,
        fontSize: 'small',
      }}
    >
      {colorText}
    </span>
  );
};

const ColorfulLabels = () => {
  return (
    <div className='d-flex flex-wrap'>
      <ColorfulLabel
        colorText='magenta'
        colorCode='#FF5CFF'
        bgColorCode='#fcf7fc'
      />
      <ColorfulLabel
        colorText='red'
        colorCode='#FF0000'
        bgColorCode='#fcebeb'
      />
      <ColorfulLabel
        colorText='vocalno'
        colorCode='#ec805b'
        bgColorCode='#fdf2e9'
      />
      <ColorfulLabel
        colorText='orange'
        colorCode='#ec9441'
        bgColorCode='#fef7e9'
      />
      <ColorfulLabel
        colorText='gold'
        colorCode='#f2bf62'
        bgColorCode='#fffbe8'
      />
      <ColorfulLabel
        colorText='lime'
        colorCode='#c3e174'
        bgColorCode='#feffe9'
      />
      <ColorfulLabel
        colorText='green'
        colorCode='#79c349'
        bgColorCode='#f8fff0'
      />
      <ColorfulLabel
        colorText='cyan'
        colorCode='#80cfcf'
        bgColorCode='#ebfffb'
      />
      <ColorfulLabel
        colorText='blue'
        colorCode='#73aff8'
        bgColorCode='#eaf7fe'
      />
      <ColorfulLabel
        colorText='geekblue'
        colorCode='#6681ea'
        bgColorCode='#f1f5fe'
      />
      <ColorfulLabel
        colorText='purple'
        colorCode='#6f42cb'
        bgColorCode='#f4edfc'
      />
    </div>
  );
};

export default ColorfulLabels;
