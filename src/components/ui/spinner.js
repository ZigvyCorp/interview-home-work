import scss from './spinner.module.scss';
function Spinner({ size }) {
  return (
    <div className={scss.spinner}>
      <div
        style={{
          width: { size },
          height: { size }
        }}
        className='spinner-border text-primary'
        role='status'></div>
    </div>
  );
}

export default Spinner;
