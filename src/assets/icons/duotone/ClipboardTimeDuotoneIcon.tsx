import { Svg, Path } from 'react-native-svg';
import type { DuotoneIconType } from './DuotoneIcon.type';

const ClipboardTimeDuotoneIcon = ({
  fill,
  secondary,
  size = 24,
}: DuotoneIconType) => {
  return (
    <Svg
      width={size.toString()}
      height={size.toString()}
      viewBox="0 0 24 24"
      fill="none"
    >
      <Path
        d="M20 15.5997V10.1992C20 7.65339 20 6.38049 19.219 5.58961C18.5359 4.898 17.4889 4.81119 15.5556 4.80029H8.44444C6.51109 4.81119 5.46406 4.898 4.78105 5.58961C4 6.38049 4 7.65339 4 10.1992V15.5997C4 18.1455 4 19.4184 4.78105 20.2093C5.5621 21.0001 6.81918 21.0001 9.33333 21.0001H14.6667C17.1808 21.0001 18.4379 21.0001 19.219 20.2093C20 19.4184 20 18.1455 20 15.5997Z"
        fill={secondary}
      />
      <Path
        d="M9.77767 3C9.04129 3 8.44434 3.60447 8.44434 4.35012V5.2502C8.44434 5.99584 9.04129 6.60031 9.77767 6.60031H14.2221C14.9585 6.60031 15.5554 5.99584 15.5554 5.2502V4.35012C15.5554 3.60447 14.9585 3 14.2221 3H9.77767Z"
        fill={fill}
      />
      <Path
        d="M16.0407 16.5087C16.0407 16.186 16.3023 15.9244 16.625 15.9244C16.9477 15.9244 17.2093 16.186 17.2093 16.5087V17.383L17.7358 17.9095C17.964 18.1377 17.964 18.5077 17.7358 18.7358C17.5077 18.964 17.1377 18.964 16.9095 18.7358L16.2118 18.0382C16.1023 17.9286 16.0407 17.78 16.0407 17.625V16.5087Z"
        fill={fill}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.25 17.625C13.25 15.761 14.761 14.25 16.625 14.25C18.489 14.25 20 15.761 20 17.625C20 19.489 18.489 21 16.625 21C14.761 21 13.25 19.489 13.25 17.625ZM16.625 15.4186C15.4064 15.4186 14.4186 16.4064 14.4186 17.625C14.4186 18.8436 15.4064 19.8314 16.625 19.8314C17.8436 19.8314 18.8314 18.8436 18.8314 17.625C18.8314 16.4064 17.8436 15.4186 16.625 15.4186Z"
        fill={fill}
      />
    </Svg>
  );
};

export default ClipboardTimeDuotoneIcon;
