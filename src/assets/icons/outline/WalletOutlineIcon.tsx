import type { OutlineIconType } from './OutlineIcon.type';
import Svg, { Path } from 'react-native-svg';
const WalletOutlineIcon = ({ fill, size = 24 }: OutlineIconType) => {
  return (
    <Svg
      width={size.toString()}
      height={size.toString()}
      fill="none"
      viewBox="0 0 24 24"
    >
      <Path
        fill={fill}
        fillRule="evenodd"
        d="M19.47 11.342h-2.254c-1.191 0-2.077.93-2.077 1.975 0 1.046.886 1.976 2.077 1.976h2.255l.02-.001c.173-.011.247-.133.253-.207V11.55c-.006-.074-.08-.196-.253-.207zm-.06-1.318q.083-.001.158.004c.73.046 1.374.623 1.428 1.43.004.052.004.109.004.162v3.394q0 .082-.003.163a1.53 1.53 0 0 1-1.43 1.43q-.074.004-.158.003h-2.193c-1.796 0-3.332-1.43-3.332-3.293s1.537-3.293 3.332-3.293h2.193"
        clipRule="evenodd"
      />
      <Path
        fill={fill}
        d="M17.86 13.317c0 .485-.374.878-.837.878s-.837-.393-.837-.878.375-.878.837-.878c.463 0 .837.393.837.878"
      />
      <Path
        fill={fill}
        fillRule="evenodd"
        d="M19.41 10.024q.083-.001.158.004c.188.011.371.06.54.137-.09-1.41-.336-2.498-1.11-3.31-.626-.656-1.421-.948-2.402-1.086l-.036-.005-.027-.02-3.127-2.175a3.21 3.21 0 0 0-3.649 0L6.63 5.744l-.027.02-.036.005c-.981.138-1.776.43-2.402 1.087s-.905 1.49-1.037 2.52C3 10.375 3 11.653 3 13.267v.099c0 1.613 0 2.891.128 3.892.132 1.03.41 1.862 1.037 2.52.626.657 1.42.948 2.402 1.087C7.521 21 8.74 21 10.278 21h2.606c1.539 0 2.758 0 3.712-.134.981-.139 1.776-.43 2.402-1.088.774-.811 1.02-1.898 1.11-3.309a1.5 1.5 0 0 1-.54.138q-.075.004-.159.003h-.571c-.095 1.178-.31 1.8-.728 2.237-.354.372-.84.594-1.682.713-.86.122-1.994.123-3.59.123h-2.512c-1.597 0-2.731-.002-3.591-.123-.843-.119-1.328-.341-1.682-.713-.355-.372-.567-.88-.68-1.764-.116-.902-.117-2.092-.117-3.766s.001-2.864.117-3.766c.113-.883.325-1.392.68-1.764.354-.372.84-.594 1.682-.713.86-.121 1.994-.123 3.59-.123h2.512c1.597 0 2.73.002 3.591.123.842.119 1.328.341 1.682.713.417.438.633 1.06.728 2.237h.571m-9.132-4.39h2.606q.649 0 1.223.003l-1.395-.97a2 2 0 0 0-2.26 0l-1.396.97q.574-.004 1.222-.003"
        clipRule="evenodd"
      />
      <Path
        fill={fill}
        d="M6.977 9.146c-.347 0-.628.295-.628.659s.281.658.628.658h3.349c.346 0 .627-.294.627-.658s-.28-.659-.627-.659z"
      />
      <Path
        fill={fill}
        fillRule="evenodd"
        d="M17.86 13.317c0 .485-.374.878-.837.878s-.837-.393-.837-.878.375-.878.837-.878c.463 0 .837.393.837.878"
        clipRule="evenodd"
      />
    </Svg>
  );
};

export default WalletOutlineIcon;
