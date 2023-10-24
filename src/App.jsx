import { useSpring, animated } from '@react-spring/web'
import { useDrag } from '@use-gesture/react'

export default function App() {
  const [{ x, y, scale }, api] = useSpring(() => ({ x: 0, y: 0, scale:1 }))
  const bind = useDrag(({ down, movement:[mx, my], tap }) => {
    if (tap) alert("Tap")
    api.start({ x: down ? mx : 0, y: down ? my : 0, scale: down? 2:1, delay:100, config:{duration:3000} })
  },
  {filterTaps: true, from: () => [x.get(), 0] },
);
  return <div>
    <p>App</p>
    <animated.div {...bind()} style={{ x, y , scale, height:100, width:100, background:"red", borderRadius:10, cursor:"move"}} />
  </div>
}