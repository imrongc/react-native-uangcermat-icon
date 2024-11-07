import type { OutlineIconType } from './OutlineIcon.type';
import Svg, { Path } from 'react-native-svg';
const TrashOutlineIcon = ({ fill, size = 24 }: OutlineIconType) => {
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
        d="M10.355 3h3.29c.21 0 .394 0 .567.026a2.19 2.19 0 0 1 1.597 1.092c.08.147.139.312.205.502l.109.31.028.078c.17.447.612.749 1.113.76l.087.001h2.92c.402 0 .729.31.729.693s-.327.692-.73.692H3.73c-.403 0-.73-.31-.73-.692 0-.383.327-.693.73-.693h3.006a1.21 1.21 0 0 0 1.141-.84l.109-.309c.066-.19.124-.355.205-.502.32-.583.913-.988 1.597-1.092C9.96 3 10.145 3 10.355 3M9.089 5.77a2.5 2.5 0 0 0 .17-.396l.097-.276c.09-.252.11-.304.13-.34a.73.73 0 0 1 .532-.365c.043-.006.101-.008.382-.008h3.2c.28 0 .339.002.382.008.228.035.426.17.532.364.02.037.04.089.13.341l.097.276.037.105q.058.15.133.29z"
        clipRule="evenodd"
      />
      <Path
        fill={fill}
        d="M6.08 8.723c-.027-.381-.375-.67-.777-.645s-.707.356-.68.737l.451 6.417c.083 1.184.15 2.14.308 2.891.164.78.443 1.432 1.018 1.943.576.511 1.28.732 2.111.835.8.099 1.81.099 3.061.099h.856c1.25 0 2.26 0 3.06-.1.832-.102 1.536-.323 2.112-.834.575-.51.854-1.162 1.018-1.943.158-.75.225-1.707.308-2.89l.45-6.418c.028-.381-.277-.711-.679-.737-.402-.025-.75.264-.776.645l-.448 6.369c-.087 1.244-.15 2.11-.287 2.76-.132.633-.317.967-.583 1.203s-.63.39-1.304.473c-.694.086-1.608.087-2.923.087h-.752c-1.315 0-2.23-.001-2.923-.087-.674-.084-1.038-.237-1.304-.473s-.45-.57-.583-1.202c-.137-.652-.2-1.517-.287-2.761z"
      />
      <Path
        fill={fill}
        d="M9.495 10.388c.401-.038.759.24.799.62l.486 4.615c.04.38-.252.72-.653.758s-.759-.24-.799-.62l-.486-4.615c-.04-.38.252-.72.653-.758M14.505 10.388c.401.038.694.377.654.758l-.487 4.615c-.04.38-.398.658-.799.62-.4-.038-.693-.377-.653-.758l.486-4.615c.04-.38.398-.658.8-.62"
      />
    </Svg>
  );
};

export default TrashOutlineIcon;