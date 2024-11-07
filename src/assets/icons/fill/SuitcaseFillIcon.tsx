import type { FillIconType } from './FillIcon.type';
import Svg, { Path } from 'react-native-svg';
const SuitcaseFillIcon = ({ fill, size = 24 }: FillIconType) => {
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
        d="M12.047 3h-.094c-.808 0-1.483 0-2.018.07-.565.073-1.075.234-1.485.629s-.577.886-.653 1.431c-.072.516-.072 1.166-.072 1.945v.068q-.232.007-.45.018v7.116h2.956c.185 0 .384 0 .553.022.197.025.45.091.661.296.213.204.281.447.307.638.023.162.023.354.023.532v.927c0 .178 0 .37-.023.533-.026.19-.094.434-.307.638-.212.205-.464.27-.661.296a5 5 0 0 1-.553.022H7.275v2.778C8.08 21 9.041 21 10.2 21h3.6c1.159 0 2.12 0 2.925-.04V7.16a24 24 0 0 0-.45-.017v-.068c0-.779 0-1.429-.072-1.945-.076-.545-.243-1.036-.653-1.431s-.92-.556-1.485-.63C13.53 3 12.855 3 12.047 3m2.878 4.122V7.12c0-.836-.001-1.397-.06-1.817-.056-.4-.152-.571-.27-.684-.117-.113-.295-.206-.71-.26C13.45 4.303 12.868 4.3 12 4.3s-1.45.002-1.885.058c-.415.054-.593.147-.71.26-.118.113-.214.284-.27.684-.059.42-.06.981-.06 1.817v.002q.529-.002 1.125-.002h3.6q.596 0 1.125.002"
        clipRule="evenodd"
      />
      <Path
        fill={fill}
        d="M19.946 19.984c-.467.45-1.06.7-1.871.84V7.296c.81.14 1.404.39 1.87.84C21 9.154 21 10.79 21 14.06s0 4.907-1.054 5.924M4.054 8.137c.467-.45 1.06-.701 1.871-.84v7.016c-.18.034-.39.108-.57.282-.213.204-.281.447-.307.638-.023.162-.023.354-.023.532v.927c0 .178 0 .37.023.533.026.19.094.434.307.638.18.174.39.248.57.282v2.68c-.81-.14-1.404-.391-1.87-.841C3 18.967 3 17.332 3 14.06c0-3.271 0-4.907 1.054-5.923M6.376 15.58l-.001.215v.868l.001.215q.092.002.224.002h3.6q.133 0 .224-.002l.001-.215v-.868l-.001-.216H6.376"
      />
    </Svg>
  );
};

export default SuitcaseFillIcon;