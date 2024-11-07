import type { FillIconType } from './FillIcon.type';
import Svg, { Path } from 'react-native-svg';
const BuildingsFillIcon = ({ fill, size = 24 }: FillIconType) => {
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
        d="M14.512 3h1.674c1.579 0 2.368 0 2.858.508s.49 1.326.49 2.962v13.229h.838a.64.64 0 0 1 .628.65.64.64 0 0 1-.628.651H3.628A.64.64 0 0 1 3 20.35c0-.36.281-.651.628-.651h.837V9.072c0-1.635 0-2.453.49-2.961.491-.509 1.28-.509 2.859-.509h3.349c1.578 0 2.368 0 2.858.509.49.508.49 1.326.49 2.961V19.7h1.256V8.995c0-.751 0-1.44-.072-2-.08-.617-.268-1.268-.786-1.805-.517-.536-1.146-.73-1.742-.814-.533-.074-1.186-.075-1.899-.075.07-.336.189-.59.385-.793C12.143 3 12.933 3 14.512 3M6.349 8.205c0-.36.281-.65.628-.65H12a.64.64 0 0 1 .628.65.64.64 0 0 1-.628.65H6.977a.64.64 0 0 1-.628-.65m0 2.602c0-.36.281-.65.628-.65H12a.64.64 0 0 1 .628.65.64.64 0 0 1-.628.65H6.977a.64.64 0 0 1-.628-.65m0 2.603c0-.36.281-.651.628-.651H12a.64.64 0 0 1 .628.65.64.64 0 0 1-.628.651H6.977a.64.64 0 0 1-.628-.65m3.14 3.686a.64.64 0 0 1 .627.651v1.952H8.86v-1.952c0-.36.282-.65.628-.65"
        clipRule="evenodd"
      />
    </Svg>
  );
};

export default BuildingsFillIcon;