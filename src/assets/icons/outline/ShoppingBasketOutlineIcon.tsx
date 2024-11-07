import type { OutlineIconType } from './OutlineIcon.type';
import Svg, { Path } from 'react-native-svg';
const ShoppingBasketOutlineIcon = ({ fill, size = 24 }: OutlineIconType) => {
  return (
    <Svg
      width={size.toString()}
      height={size.toString()}
      fill="none"
      viewBox="0 0 24 24"
    >
      <Path
        fill={fill}
        d="M9.007 12.923a.691.691 0 1 0-1.381 0v3.692a.692.692 0 1 0 1.381 0zM15.684 12.23c.381 0 .69.31.69.693v3.692a.692.692 0 1 1-1.381 0v-3.692c0-.382.31-.692.69-.692M12.69 12.923a.691.691 0 1 0-1.38 0v3.692a.692.692 0 1 0 1.38 0z"
      />
      <Path
        fill={fill}
        fillRule="evenodd"
        d="M16.857 4.129c-.438-.172-.929-.2-1.558-.205A1.61 1.61 0 0 0 13.842 3h-3.684c-.643 0-1.198.378-1.457.924-.63.004-1.12.033-1.558.205A3 3 0 0 0 5.83 5.134c-.338.457-.497 1.041-.715 1.846l-.578 2.125c-.357.184-.67.43-.93.765-.573.735-.674 1.61-.572 2.616.099.974.405 2.202.788 3.739l.025.097c.242.972.439 1.761.673 2.377.244.642.554 1.168 1.064 1.568.511.4 1.096.573 1.776.655C8.014 21 8.825 21 9.825 21h4.35c1 0 1.811 0 2.464-.078.68-.082 1.265-.255 1.776-.655.51-.4.82-.926 1.064-1.568.234-.616.431-1.405.673-2.377l.025-.097c.383-1.537.69-2.765.788-3.74.102-1.004 0-1.88-.572-2.615a2.74 2.74 0 0 0-.93-.764l-.578-2.126c-.218-.805-.377-1.39-.715-1.846-.335-.452-.79-.8-1.313-1.005m-9.21 1.29c.202-.08.446-.103 1.056-.11.259.545.813.922 1.455.922h3.684c.642 0 1.196-.377 1.455-.921.61.006.854.03 1.057.109.282.11.527.298.707.541.162.219.258.525.525 1.51l.326 1.196c-.956-.128-2.19-.128-3.723-.128H9.811c-1.533 0-2.767 0-3.723.128l.326-1.197c.268-.984.363-1.29.525-1.509.18-.243.425-.431.707-.541m2.511-1.034a.23.23 0 0 0 0 .461h3.684a.23.23 0 0 0 0-.461zm-5.462 6.337c.257-.33.663-.551 1.502-.673.857-.124 2.02-.126 3.67-.126h4.264c1.65 0 2.813.002 3.67.126.84.122 1.245.343 1.502.673s.373.778.287 1.624c-.088.863-.368 1.993-.768 3.599-.256 1.023-.433 1.732-.635 2.261-.194.512-.385.783-.623.97-.24.186-.547.306-1.09.371-.561.067-1.29.068-2.343.068H9.868c-1.053 0-1.782 0-2.343-.068-.543-.065-.85-.185-1.09-.372-.238-.186-.429-.457-.623-.969-.202-.53-.38-1.238-.635-2.261-.4-1.606-.68-2.736-.768-3.6-.086-.845.03-1.293.287-1.623"
        clipRule="evenodd"
      />
    </Svg>
  );
};

export default ShoppingBasketOutlineIcon;