import Style from '../../styles';

const { color, padding } = Style;

export default {
  containerStyles: (alertType) => {
    const successAlert = { backgroundColor: color.success };
    const errorAlert = { backgroundColor: color.alert };
    const baseStyles = {
      alignItems: 'center',
      color: color.white,
      display: 'flex',
      height: '50px',
      justifyContent: 'space-between',
      paddingLeft: padding.half,
      paddingRight: padding.half,
      position: 'fixed',
      left: '223px',
      right: 0,
      top: 0,
      zIndex: '2',
      '@media (max-width: 760px)': {
        left: '54px',
      },
    };

    if (alertType === 'success') {
      return { ...baseStyles, ...successAlert };
    }

    if (alertType === 'error') {
      return { ...baseStyles, ...errorAlert };
    }

    return {};
  },
  contentStyles: {},
  flashActionStyles: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '96px',
  },
  removeFlashMessageStyles: (alertType) => {
    const backgroundColor = alertType === 'success' ? color.successLight : color.alertLight;
    return {
      backgroundColor,
      borderRadius: '50%',
      color: color.white,
      cursor: 'pointer',
      height: '30px',
      textAlign: 'center',
      width: '30px',
    };
  },
  undoStyles: {
    color: color.white,
    cursor: 'pointer',
  },
};
