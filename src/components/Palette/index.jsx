import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import className from 'classnames/bind';
import styles from './styles.module.scss';

const Palette = (
  {
    changeColor,
  },
) => {
  const [showPalette, setShowpalette] = useState(false);

  const colors = useMemo(() => [
    '#000000',
    '#ff0000',
    '#001f3f',
    '#0074D9',
    '#3D9970',
    '#2ECC40',
    '#FF4136',
    '#85144b',
    '#F012BE',
    '#E27D60',
    '#85DCBA',
    '#E8A87C',
    '#C38D9E',
    '#41B3A3',
    '#242582',
    '#553D67',
    '#F64C72',
    '#99738E',
    '#2F2FA2',
    '#8D8741',
    '#659DBD',
    '#DAAD86',
    '#BC986A',
    '#FBEEC1',
    '#379683',
    '#3D5547',
    '#3FEEE6',
    '#97CAEF',
    '#5CDB95',
    '#5D5C61',
    '#557A95',
    '#501B1D',
    '#64485C',
    '#ADADAD',
    '#190061',
    '#3500D3',
    '#282828',
    '#950740',
    '#C3073F',
    '#AFD275',
    '#7E685A',
    '#80777d',
    '#66FCF1',
    '#1F2833',
    '#e36a6a',
    '#AC3B61',
    '#123C69',
    '#2C3531',
    '#116466',
  ], []);

  const cx = className.bind(styles);

  const paletteStyles = cx({
    palette: true,
    visible: showPalette,
  });

  const togglePalette = () => setShowpalette((prevState) => !prevState);

  const renderPalette = () => colors.map((color) => (
    <div
      key={color}
      className={styles.colorBlock}
      style={{ background: color }}
      onClick={() => changeColor(color)}
    />
  ));

  return (
    <div className={styles.colorChanger}>
      <span
        role="img"
        aria-label="palette"
        title="Change color"
        onClick={togglePalette}
      >
        🎨
      </span>
      <div
        className={paletteStyles}
      >
        <div className={styles.wrapper}>
          {renderPalette()}
        </div>
        <div className={styles.pointer} />
      </div>
    </div>
  );
};

Palette.propTypes = {
  changeColor: PropTypes.func.isRequired,
};
export default React.memo(Palette);
