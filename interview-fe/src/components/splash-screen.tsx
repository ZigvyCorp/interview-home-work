import type { FC } from 'react';
import logo from 'public/static/images/logo/engemon.svg';
import { LogoSignWrapper, LogoWrapper } from '@/components/LogoSign';

const SplashScreen: FC = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        alignItems: 'center',
        backgroundColor: 'background.paper',
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        justifyContent: 'center',
        left: 0,
        p: 3,
        position: 'fixed',
        top: 0,
        width: '100vw',
        zIndex: 1400
      }}
    >
      <Box
        sx={{
          display: 'inline-flex',
          height: 48,
          width: 48
        }}
      >
        <LogoWrapper href="/">
          <Badge
            sx={{
              '.MuiBadge-badge': {
                fontSize: theme.typography.pxToRem(11),
                right: -6,
                top: 8
              }
            }}
            overlap="circular"
            color="success"
            badgeContent="1.0"
          >
            <LogoSignWrapper>
              <img src={logo} height={50} width={50} alt="Engemon Logo" />
            </LogoSignWrapper>
          </Badge>
        </LogoWrapper>
      </Box>
    </Box>
  );
};

export default SplashScreen;
