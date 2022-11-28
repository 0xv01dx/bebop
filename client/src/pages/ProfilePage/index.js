import useMediaQuery from '../../hooks/useMediaQuery';
import AuthSelection from '../../components/Profile';

export default function PublicPage({ clickRegister }) {
  const isDesktop = useMediaQuery('(min-width: 992px)'),
    pageStyles = {
      width: '50%',
      height: '50%',
      display: 'flex',
      flexDirection: isDesktop ? 'row-reverse' : 'column',
      flexWrap: isDesktop ? 'wrap' : 'nowrap',
      alignItems: 'center',
    };

  return (
    <div style={pageStyles}>
      <AuthSelection clickRegister={clickRegister} />
    </div>
  );
}
