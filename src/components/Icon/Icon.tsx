import React from 'react';
import { SvgProps } from 'react-native-svg';

export interface IconProps extends SvgProps {
  size?: string | number;
  component: React.ComponentClass<SvgProps>;
}

const Icon: React.FC<IconProps> = ({ component, width, height, size, ...iconProps }) => {
  const IconComponent = component;

  return <IconComponent width={width || size} height={height || size} {...iconProps} />;
};

export default Icon;
